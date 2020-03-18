import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Notes from './../containers/Notes';

const Board = ({ id, title, onDragOver, onDrop }) => (
    <Grid item xs={ 12 } sm={ 6 } md={ 3 } id={ id } className="board">
        <h3>{ title }</h3>
        <Container
            maxWidth="sm"
            id={ `container-${ id }` }
            onDragOver={ e => onDragOver(e) }
            onDrop={ e => onDrop(e, id) }
        >
            <Notes id={ id } />
        </Container>
    </Grid>
);

Board.displayName = "Board";

export default Board;