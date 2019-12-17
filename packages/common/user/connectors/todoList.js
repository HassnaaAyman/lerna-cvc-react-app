import React from 'react';
import TodoListController from "../../controllers/todoList"


export default (WrappedComponent)=>(
        // console.log(props)
    <TodoListController>
        {(props)=>{
            return (<WrappedComponent {...props}/>)
        }}
    </TodoListController>
)