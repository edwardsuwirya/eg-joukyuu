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