import React from 'react';
import { connect } from 'react-redux';

import { logout, clearLoginPassCode, unsetActiveModule } from '../actions';
class Logout extends React.Component {
    onLogout = () => {
        this.props.logout();
        this.props.clearLoginPassCode();
        this.props.unsetActiveModule();
    }

    render() {
        return (
            <div className="item" style={{ cursor: 'pointer' }} onClick={this.onLogout} >
                <h3 className="ui header" style={{ color: 'white' }}>{`Logout, ${this.props.userInfo.fullName}`}</h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { userInfo: state.userInfoReducer };
}

export default connect(mapStateToProps, {
    logout: logout,
    clearLoginPassCode: clearLoginPassCode,
    unsetActiveModule: unsetActiveModule

})(Logout);