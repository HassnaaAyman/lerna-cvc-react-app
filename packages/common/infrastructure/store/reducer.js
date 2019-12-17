import * as actionTypes from '../store/action';


const initiateState = {
    todos: [
    { id: 1, name: "ay7aga" },
    { id: 2, name: "hasnaa" },
    { id: 3, name: "ay7aga2" }
 ]}

const reducer = (state = initiateState, action) => {
    switch (action.type) {
        case actionTypes.ADDTODO:
            let newTodo = action.todoData;
            console.log(action.todoData);
            let newTodos = [...state.todos];
            newTodos.push(newTodo);
            console.log(newTodos);
            return {
                ...state,
                todos: newTodos
            }

        case actionTypes.DELETETODO:
            let todo = action.todoData.id;
            console.log(todo);
            let Todos = [...state.todos];
            let todoId = Todos.findIndex(t => t.id !== todo);
            Todos.splice(todoId , 1);
            console.log(Todos);
            return {
                ...state,
                todos: Todos
            }
        default:
            return state
    }
};

export default reducer;
