import React, { Component } from 'react';
import Todo from './todo';
import todosConnector from  "@packages/common/user/connectors/todoList"

class TodoList extends Component {
  render() {
    const todos = this.props.todoList.map((todo , index)=>(
       <Todo
         key={index}
         id={todo.id}
         name={todo.name}
       />
    ));
    return( 
      <div className="TodoList">
        {todos}
     </div>
    )
  }
}

export default todosConnector(TodoList);