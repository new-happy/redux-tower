export const addFabulous = postId => ({
    type:'ADD_FABULOUS',
    postId
})
export const addComment = comment => ({
    type:'ADD_COMMENT',
    comment
})
export const removeFabulous = newReply => ({
    type:'REMOVE_COMMENT',
    newReply
}) 