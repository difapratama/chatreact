export const postComment = (author, message) => ({
    type: 'POST_COMMENT',
    author,
    message
})

export const deleteComment = (index) => ({
    type: 'DELETE_COMMENT',
    index
})