import { TodoActions } from '../action/todo';


let initalTodos = [{
    todoTask: 'first',
    isfavourite: false
}, {
    todoTask: 'second',
    isfavourite: false
}]
export let todoReducers = (state = initalTodos, action) => {
    switch (action.type) {
        case TodoActions:
            return [...state, action.payload]
        case TodoActions.DELETETODO:
            return state.filter(todo => todo !== action.payload)
        case TodoActions.FAVOURITETODO:
            return state.map(todo => {
                if (todo == action.payload) {
                    todo.isfavourite = !todo.isfavourite
                }
                return todo;
            })
        default:
            return state
    }
}