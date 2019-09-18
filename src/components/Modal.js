import React from 'react';
import ReactDOM from 'react-dom';
class Modal extends React.Component {
    removeMe = () => {
        this.props.unMount();
    }

    renderModal() {

        return (
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">

                    <div className="header">Header</div>
                    <div className="content">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="actions">
                        <div className="ui approve button">Approve</div>
                        <div onClick={() => this.removeMe()} className="ui cancel button">Cancel</div>

                    </div>
                </div>
            </div>
        )


    }
    render() {
        return ReactDOM.createPortal(this.renderModal(), document.querySelector('#modal')
        )
    }
}
export default Modal;
