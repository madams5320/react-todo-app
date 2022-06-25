import React, { useReducer, useState } from "react";
import Todo from "./components/Todo";
import { Container, CssBaseline, TextField, Typography, Box } from '@mui/material';
import { Title } from "@mui/icons-material";

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const initialTodos = [
  {
    id: 1,
    name: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    name: "Todo 2",
    complete: false,
  },
];

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: 
      //put all current to-dos in an array
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          //get new todo that is complete
          //put all of the values in to-do in a new object
          //turn it from true to false or vice versa
          return { ...todo, complete: !todo.complete }
        }
          return todo;
      })
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

//add new to-do
const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
} 

function App() {

  //call hooks
  //pass in an empty array as the second parameter because only on thing is going to be in the state
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [name, setName] = useState('');

  //run this function when the form is submitted 
  //this function adds a new to-do
  const handleSubmit = (e) => {

    //stops the page from re-loading
    e.preventDefault();
    //type is for new to-do
    //payload gives the reducer function access to variables
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    //reset name to empty string to clear out submitted value
    setName('');
  } 

  return (
    <>
      <CssBaseline />
      <Container 
        maxWidth="sm" 
        backgroundColor="primary"
        //center 
        alignItems="center"
        justifyContent="center"
      >

        <Box>
          <Typography 
            variant="h3"
            display="flex"
            //center 
            alignItems="center"
            justifyContent="center"
            marginTop="3rem"
          >
            To-Do List
          </Typography>
        </Box>

        <Box 
          display="flex"
          //center 
          alignItems="center"
          justifyContent="center"
          gutterBottom
        >

          <form 
            onSubmit={handleSubmit}
          >
            <TextField
              id="standard-basic"
              label="Create To-Do..."
              variant="standard" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </Box>

        {/* print out added to-dos */}
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
      </Container>
    </>
  );
}

export default App;
