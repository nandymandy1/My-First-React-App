const initState = {
    posts: [
        { id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident molestias aspernatur tempora optio maiores, libero voluptate ullam nostrum nam sunt ratione. Corporis tenetur amet, delectus soluta facere rerum minima?' },
        { id: 2, title: 'Post 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident molestias aspernatur tempora optio maiores, libero voluptate ullam nostrum nam sunt ratione. Corporis tenetur amet, delectus soluta facere rerum minima?' },
        { id: 3, title: 'Post 3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident molestias aspernatur tempora optio maiores, libero voluptate ullam nostrum nam sunt ratione. Corporis tenetur amet, delectus soluta facere rerum minima?' }
    ]
}
const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type == 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;