import React from 'react';
import './App.css';
import Todos from './user/components/todoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <div>
           <Todos/>
         </div>
      </header>
    </div>
  );
}

export default App;
