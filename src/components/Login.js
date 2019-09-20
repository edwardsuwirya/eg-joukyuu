import React from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { addLoginPassCode, deleteLoginPassCode, setUserInfo, clearLoginPassCode, setErrorInfo, unsetErrorInfo } from '../actions';
import Modal from '../components/Modal';

class Login extends React.Component {
    modalUnmount = () => {
        this.props.unsetErrorInfo();
        this.props.clearLoginPassCode();
    }

    onLoginAuthenticated() {
        if (this.props.login === '123456') {
            this.props.setUserInfo({ fullName: 'Edo', features: ['kanji'] });
        } else {
            this.props.setErrorInfo('Wrong pass code');
        }
    }

    extractErrorInfo() {
        if (this.props.errorInfo) {
            return this.props.errorInfo[0];
        } else {
            return null;
        }
    }
    createMasking() {
        const strLen = this.props.login.length;
        let mask = '';
        for (let i = 1; i <= strLen; i++) {
            mask = mask + 'X';
        }

        return mask;
    }

    onButtonPassCodeClick = async (passCode) => {
        await this.props.addLoginPassCode(passCode);
        if (this.props.login.length === 6) {
            this.onLoginAuthenticated();
        } else {
            //do nothing
        }

    }

    onButtonDeleteClick = () => {
        this.props.deleteLoginPassCode();
        this.createMasking('');
    }
    render() {
        let modalErrorInfo = null;
        const msg = (this.extractErrorInfo())
        if (msg) { 

            modalErrorInfo = (
                <Modal unMount={this.modalUnmount} content={msg} ></Modal>);
        }
        return (
            <div>
                <div className="login">
                    <div className="ui green segment" style={{ width: '35%' }}>

                        <div className="ui three column grid">
                            <div className="three column centered  row ">
                                <h2>Masukan Security Code Anda</h2>
                            </div>
                            <div className="three column centered  row ">
                                <div style={{ height: '50px', borderBottom:'1px solid gray',width:'90%',margin:'0 auto' }}>
                                    <h2>{this.createMasking()}</h2>
                                </div>
                            </div>
                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('7')} className="ui positive huge button">7</button></div>
                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('8')} className="ui positive huge button">8</button></div>

                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('9')} className="ui positive huge button">9</button></div>

                            <div className="column"> <button onClick={() => this.onButtonPassCodeClick('4')} className="ui positive huge button">4</button></div>

                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('5')} className="ui positive huge button">5</button></div>

                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('6')} className="ui positive huge button">6</button></div>


                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('1')} className="ui positive huge button">1</button></div>

                            <div className="column"> <button onClick={() => this.onButtonPassCodeClick('2')} className="ui positive huge button">2</button></div>

                            <div className="column"><button onClick={() => this.onButtonPassCodeClick('3')} className="ui positive huge button">3</button></div>

                            <div className="column ">  <div /></div>
                            <div className="column "><button onClick={() => this.onButtonPassCodeClick('0')} className="ui positive huge button">0</button></div>
                            <div className="column "><button onClick={this.onButtonDeleteClick} className="ui orange huge button">X</button></div>
                        </div>
                    </div>
                </div>
                {modalErrorInfo}
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return { login: state.loginReducer, userInfo: state.userInfoReducer, errorInfo: state.errorInfoReducer };
}

export default connect(mapStateToProps,
    {
        addLoginPassCode: addLoginPassCode,
        deleteLoginPassCode: deleteLoginPassCode,
        setUserInfo: setUserInfo,
        clearLoginPassCode: clearLoginPassCode,
        setErrorInfo: setErrorInfo,
        unsetErrorInfo: unsetErrorInfo
    })(Login);
