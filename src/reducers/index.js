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

const loginReducer = (passCode = '', action) => {
    if (action.type === 'ADD_LOGIN_PASSCODE') {
        if (passCode.length < 6) {
            return passCode + action.payload;
        } else {
            return action.payload;
        }
    } else if (action.type === 'DELETE_LOGIN_PASSCODE') {
        return passCode.substring(0, passCode.length - 1);
    } else if (action.type === 'CLEAR_LOGIN_PASSCODE') {
        return '';
    } else {
        return passCode;
    }
}

const userInfoReducer = (userInfo = {}, action) => {
    if (action.type === 'SET_USER_INFO') {
        return action.payload;
    } else if (action.type === 'UNSET_USER_INFO') {
        return {};
    } else {
        return userInfo;
    }
}

const errorInfoReducer = (errorInfo = [], action) => {
    if (action.type === 'SET_ERROR_INFO') {
        return [...errorInfo, action.payload];
    } else if (action.type === 'UNSET_ERROR_INFO') {
        return [];
    } else {
        return errorInfo;
    }
}

const activeModuleReducer = (moduleInfo = {}, action) => {
    if (action.type === 'SET_ACTIVE_MODULE') {
        return action.payload;
    } else if (action.type === 'UNSET_ACTIVE_MODULE') {
        return {};
    } else {
        return moduleInfo;
    }
}

export default combineReducers({
    kanjiReducer: kanjiReducer,
    selectedKanjiReducer: selectedKanjiReducer,
    changeViewKanjiReducer: changeViewKanjiReducer,
    loginReducer: loginReducer,
    userInfoReducer: userInfoReducer,
    errorInfoReducer: errorInfoReducer,
    activeModuleReducer: activeModuleReducer
});