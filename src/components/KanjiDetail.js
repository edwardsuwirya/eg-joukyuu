import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { selectKanji } from '../actions';

class KanjiDetail extends React.Component {

    modalUnmount = () => {
        this.props.selectKanji('')
    }

    onApprove = () => {
        console.log('approve');
    }
    render() {
        const buttonApprove = (
            <div onClick={this.onApprove} className="ui approve button">Approve</div>
        )
        if (this.props.kanji.kanji) {
            return (
                <Modal unMount={this.modalUnmount} content={this.props.kanji.kanji} action={buttonApprove}>

                </Modal>
            )
        } else {
            return <div />
        }
    }
}

const mapStateToProps = (state) => {
    return { kanji: state.selectedKanjiReducer };
}

export default connect(mapStateToProps, { selectKanji: selectKanji })(KanjiDetail);