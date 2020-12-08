import React, { Fragment } from 'react';
import './App.css';

// Components
import InputTodo from './components/inputTodo';
import ListTodos from './components/listTodos';

function App() {
  return (    
    <Fragment>
      <div className='container'>
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>
      </div>
     
    </Fragment>
  );
}

export default App;
