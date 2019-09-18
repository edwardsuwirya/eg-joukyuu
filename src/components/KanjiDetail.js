import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { selectKanji } from '../actions';

class KanjiDetail extends React.Component {

    modalUnmount = () => {
        this.props.selectKanji('')
    }
    render() {
        if (this.props.kanji.kanji) {
            return (
                <Modal unMount={this.modalUnmount} content={this.props.kanji.kanji}>

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