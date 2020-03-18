import React from 'react';
import { Card, CardActions, CardContent, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({ _id, text, add, save, remove, onDragStart }) => (
    <Card
        id={ _id && `card-${ _id }` }
        onDragStart={ _id ? e => onDragStart(e, _id) : null }
        draggable={ _id ? true : false }
    >
        <CardContent>
            <TextField
                id={ `textField${ _id ? _id : 'Add' }` }
                multiline
                rowsMax="4"
                variant="outlined"
                defaultValue={ text }
                onBlur={ () => _id ? save(_id) : add() }
            />
        </CardContent>
        {
            _id &&
            <CardActions>
                <IconButton onClick={ () => remove(_id) } size="small">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        }
    </Card>
);

Note.displayName = "Note";

export default Note;