import React from 'react';
import { connect } from 'react-redux';
import { selectKanji, changeViewKanji } from '../actions';

class KanjiList extends React.Component {
    hideAndShow(status) {
        if (status === 'yomikata') {
            this.props.changeViewKanji({
                showKanji: this.props.kanjiViews.showKanji,
                labelKanji: this.props.kanjiViews.labelKanji,
                showYomi: !this.props.kanjiViews.showYomi,
                labelYomi: this.props.kanjiViews.showYomi ? 'Hide Yomi Kata' : 'Show Yomi Kata'
            })
        } else if (status === 'kakikata') {
            this.props.changeViewKanji({
                showKanji: !this.props.kanjiViews.showKanji,
                labelKanji: this.props.kanjiViews.showKanji ? 'Hide Kanji' : 'Show Kanji',
                showYomi: this.props.kanjiViews.showYomi,
                labelYomi: this.props.kanjiViews.labelYomi
            });
        }
    }

    renderList() {
        const hideYomi = !this.props.kanjiViews.showYomi ? {} : { display: 'none' };
        const hideKaki = !this.props.kanjiViews.showKanji ? {} : { display: 'none' };
        return this.props.kanjis.map((kanji) => {
            return (
                <tr key={kanji.id}>
                    <td data-label="漢字"><h2 style={hideKaki}>{kanji.kanji}</h2></td>
                    <td data-label="読み方"><span style={hideYomi}>{kanji.yomikata}</span></td>
                    <td data-label="意味">{kanji.imi}</td>
                    <td data-label="第一">{kanji.dai}</td>
                    <td>
                        <button onClick={() => this.props.selectKanji(kanji)} className="ui button primary">Select</button>
                    </td>
                </tr>
            );
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.hideAndShow('kakikata')} className="ui button primary">{this.props.kanjiViews.labelKanji}</button>
                <button onClick={() => this.hideAndShow('yomikata')} className="ui button primary">{this.props.kanjiViews.labelYomi}</button>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>漢字</th>
                            <th>読み方</th>
                            <th>意味</th>
                            <th>第一</th>
                            <th></th>
                        </tr></thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { kanjis: state.kanjiReducer,  kanjiViews: state.changeViewKanjiReducer };
}

export default connect(mapStateToProps, {
    selectKanji: selectKanji,
    changeViewKanji: changeViewKanji
})(KanjiList);