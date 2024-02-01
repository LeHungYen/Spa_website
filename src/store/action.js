export function changeLanguage(dispatch ,lang) {
    dispatch({
        type: "CHANGE_LANGUAGE",
        payload: lang
    });
}