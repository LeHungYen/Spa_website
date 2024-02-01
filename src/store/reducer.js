const defaultValue = {
    lang: "vi"
}
export default function reducer (state = defaultValue, action) {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                ...state,
                lang: action.payload,
            }
        default:
            return state
    }
}