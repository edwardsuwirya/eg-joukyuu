import { combineReducers } from "redux";

const kanjiReducer = () => {
    return [
        { id: '1', kanji: '景色', yomikata: 'けしき', imi: 'Pemandangan', dai: '1' },
        { id: '2', kanji: '印象的', yomikata: 'いんしょうてき', imi: 'Menakjubkan', dai: '1' }
    ];
};



const selectedKanjiReducer = (selectedKanji = '', action) => {
    if (action.type === 'KANJI_SELECTED') {
        return action.payload;
    }
    return selectedKanji;

};

const changeViewKanjiReducer = (selectedKanji = { showKanji: false, labelKanji: 'Hide Kanji', showYomi: false, labelYomi: 'Hide Yomi Kata' }, action) => {
    if (action.type === 'VIEW_KANJI_CHANGE') {
        return action.payload;
    } else {
        return selectedKanji;
    }
};

export default combineReducers({
    kanjiReducer: kanjiReducer,
    selectedKanjiReducer: selectedKanjiReducer,
    changeViewKanjiReducer: changeViewKanjiReducer
});