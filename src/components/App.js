import React from 'react';
import { connect } from 'react-redux';
import KanjiList from './KanjiList';
import Login from './Login';
import { setActiveModule } from '../actions';
import './App.css';
import Logout from './Logout';

class App extends React.Component {
    onCheckPrivileges = (priv) => {
        const arr = this.props.userInfo.features;
        if (arr) {
            const isAllowedFeature = arr.includes(priv);
            return isAllowedFeature;
        } else {
            return false;
        }
    }

    renderContent(moduleName) {
        const isHaveKanjiPriv = this.onCheckPrivileges(moduleName);
        if (isHaveKanjiPriv) {
            switch (moduleName) {
                case 'kanji': this.props.setActiveModule({ moduleName: moduleName, moduleComponent: <KanjiList title={moduleName} /> }); break;
                default: this.props.setActiveModule({ moduleName: 'default', moduleComponent: <div /> })
            }

        }
    }

    renderActiveMenu(currentModule) {
        const activeTitle = this.props.activeModule.moduleName;
        if (currentModule === activeTitle) {
            return 'item active-menu'
        } else {
            return 'item';
        }
    }
    renderMenu() {
        const arr = this.props.userInfo.features;

        if (arr) {
            return arr.map((priv) => {
                return (
                    <div key={priv} className='item' style={{ cursor: 'pointer' }} onClick={() => { this.renderContent(priv) }}>
                        <h3 className={this.props.activeModule.moduleName === priv ? 'ui header active-menu ' : 'ui header inactive-menu'}>{priv}</h3>
                    </div>
                )
            });
        }
    }

    render() {
        if (this.props.userInfo.fullName) {
            return (
                <div>
                    <div className="ui fluid container">
                        <div className="ui grid">
                            <div className="three wide column">
                                <div className="ui secondary vertical pointing menu" style={{ height: '100vh', backgroundColor: 'darkseagreen' }}>
                                    {this.renderMenu()}
                                    <Logout />
                                </div>
                            </div>
                            <div className="thirteen wide column">
                                <div>
                                    {this.props.activeModule.moduleComponent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="ui container">
                        <Login />
                    </div>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return { userInfo: state.userInfoReducer, activeModule: state.activeModuleReducer };
}

export default connect(mapStateToProps, { setActiveModule: setActiveModule })(App);