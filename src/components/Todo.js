import React from 'react';
import { ACTIONS } from '../App.js';

//material ui library imports
import { Checkbox, Box, Typography, Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Todo = ({ todo, dispatch }) => {

  return (
    <>
        <Box 
            display="flex"
            //center 
            alignItems="center"
            justifyContent="center"
        >

            {/* complete check box */}
            <Checkbox
                style={{ color: todo.complete ? '#AAA' : '#000' }}
                checked={todo.complete}
                onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
            />

            {/* to-do name */}
            <Typography
                variant="subtitle1"
                marginTop="0.5rem"
                style={{ color: todo.complete ? '#AAA' : '#000' }}
            >
                {todo.name}
            </Typography>

            {/* delete button */}
            <Button
                onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
            >
                <DeleteOutlineOutlinedIcon />
            </Button>
        </Box>
    </>
  );
}

export default Todo;