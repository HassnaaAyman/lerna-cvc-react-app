import React, { useState } from 'react';
import { connect } from "react-redux"


const TodoList = (props)=>{

    const [todoList, setTodoList] = useState([]);
    console.log(todoList);
    const todos = props.todoList ;

    return props.children({ todos });
}


const mapStateToProps = (state) => {
    return {
        todoList: state.todos
    }
}

export default connect(mapStateToProps, null)(TodoList);