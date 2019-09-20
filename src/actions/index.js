export const selectKanji = (kanji) => {
    return {
        type: 'KANJI_SELECTED',
        payload: kanji
    }
}

export const changeViewKanji = (kanji) => {
    return {
        type: 'VIEW_KANJI_CHANGE',
        payload: kanji
    }
}

export const addLoginPassCode = (passCode) => {
    return {
        type: 'ADD_LOGIN_PASSCODE',
        payload: passCode
    }
}

export const deleteLoginPassCode = (passCode) => {
    return {
        type: 'DELETE_LOGIN_PASSCODE',
        payload: passCode
    }
}
export const clearLoginPassCode = () => {
    return {
        type: 'CLEAR_LOGIN_PASSCODE',
        payload: ''
    }
}

export const setUserInfo = (userInfo) => {
    return {
        type: 'SET_USER_INFO',
        payload: userInfo
    }
}

export const setErrorInfo = (errorInfo) => {
    return {
        type: 'SET_ERROR_INFO',
        payload: errorInfo
    }
}

export const unsetErrorInfo = () => {
    return {
        type: 'UNSET_ERROR_INFO',
        payload: ''
    }
}

export const setActiveModule = (moduleName) => {
    return {
        type: 'SET_ACTIVE_MODULE',
        payload: moduleName
    }
}

export const unsetActiveModule = () => {
    return {
        type: 'UNSET_ACTIVE_MODULE',
    }
}

export const logout = () => {
    return {
        type: 'UNSET_USER_INFO',
        payload: ''
    }
}