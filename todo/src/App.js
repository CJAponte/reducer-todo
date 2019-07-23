import React, { useReducer } from 'react';
import './App.css';

import { reducer, initialState, ADD_TODO, TOGGLE_TODO, CLEAR_DONE } from './Components/Reducer/Reducer';

import ToDoForm from './Components/ToDo/ToDoForm'
import ToDo from "./Components/ToDo/ToDo"
import { Header, Divider } from 'semantic-ui-react'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (e, item) => {
    e.preventDefault()
    dispatch({ type: ADD_TODO, payload: item})
  }

  const toggleItem = itemID => {
    dispatch({ type: TOGGLE_TODO, payload: itemID})
  }

  const clearCompleted = e => {
    e.preventDefault()
    dispatch({ type: CLEAR_DONE})
  }
  return (
    <div className="App">
      <Header style={{margin: '40px auto'}} size="huge">ToDo Items</Header>
      <ToDo todoitems={state.todoitems} toggleItem={toggleItem} clearCompleted={clearCompleted} />
      <Divider style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', border: '2px solid lightgrey', width: '50%'}}/>
      <ToDoForm addItem={addItem}/>
    </div>
  );
}

export default App;
