const comments = (state = [], action) => {
    switch (action.type) {
        case 'POST_COMMENT':
            return [
                ...state,
                {
                    author: action.author,
                    message: action.message
                }
            ]
        case 'DELETE_COMMENT':
        console.log("lagi delete", action.index);
        return state.filter((item, i) => i !== action.index)
        default:
        return state
    }
}

export default comments