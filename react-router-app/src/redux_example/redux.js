// Redux Instance createStore
const { createStore } = Redux;

// Initialize Initial State
const initState = {
    todos: [],
    posts: []
};

// function which takes the actins and performs it
function myreducer(state = initState, action) {
    if (action.type == 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
    if (action.type == 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
}

// Store Initialization
const store = createStore(myreducer);

store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
})

// Defines Actions
const todoAction1 = { type: 'ADD_TODO', todo: 'Buy Laptop MACBOOK AIR' };
const postAction1 = { type: 'ADD_POST', post: { id: 1, title: "Post 1", body: "This is the body of the Post 1" } };
const postAction2 = { type: 'ADD_POST', post: { id: 2, title: "Post 2", body: "This is the body of the Post 2" } };
const todoAction2 = { type: 'ADD_TODO', todo: 'Buy Laptop MACBOOK PRO' };

// Dispatch (Act Instructions) Actions
store.dispatch(todoAction1);
store.dispatch(postAction1);
store.dispatch(todoAction2);
store.dispatch(postAction2);


