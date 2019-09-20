import React from 'react';
import { connect } from 'react-redux';
import { selectKanji, changeViewKanji } from '../actions';
import KanjiDetail from './KanjiDetail';


class KanjiList extends React.Component {
    hideAndShow(status) {
        if (status === 'yomikata') {
            this.props.changeViewKanji({
                showKanji: this.props.kanjiViews.showKanji,
                labelKanji: this.props.kanjiViews.labelKanji,
                showYomi: !this.props.kanjiViews.showYomi,
                labelYomi: this.props.kanjiViews.showYomi ? '読み方を隠す' : '読み方を見せる'
            })
        } else if (status === 'kakikata') {
            this.props.changeViewKanji({
                showKanji: !this.props.kanjiViews.showKanji,
                labelKanji: this.props.kanjiViews.showKanji ? '漢字を隠す' : '漢字を見せる',
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
                    <td data-label="漢字"><h3 style={hideKaki}>{kanji.kanji}</h3></td>
                    <td data-label="読み方"><span style={hideYomi}>{kanji.yomikata}</span></td>
                    <td data-label="意味">{kanji.imi}</td>
                    <td data-label="第一">{kanji.dai}</td>
                    <td>
                        <button onClick={() => this.props.selectKanji(kanji)} className="ui orange basic button">選ぶ</button>
                    </td>
                </tr>
            );
        })
    }
    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <div className="ui raised segment">
                    <div className="ui green ribbon label"><h3>{this.props.title}</h3></div>

                    <div style={{ marginTop: '20px' }}>
                        <button onClick={() => this.hideAndShow('kakikata')} className="ui basic button green">{this.props.kanjiViews.labelKanji}</button>
                        <button onClick={() => this.hideAndShow('yomikata')} className="ui basic button green">{this.props.kanjiViews.labelYomi}</button>
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th><h2>漢字</h2></th>
                                    <th><h2>読み方</h2></th>
                                    <th><h2>意味</h2></th>
                                    <th><h2>第一</h2></th>
                                    <th></th>
                                </tr></thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <KanjiDetail />
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return { kanjis: state.kanjiReducer, kanjiViews: state.changeViewKanjiReducer, userInfo: state.userInfoReducer };
}

export default connect(mapStateToProps, {
    selectKanji: selectKanji,
    changeViewKanji: changeViewKanji,

})(KanjiList);