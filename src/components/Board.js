import React from 'react';
import { Col } from 'react-flexbox-grid';
import { Container } from '@material-ui/core';
import Notes from './../containers/Notes';

const Board = ({ id, title, onDragOver, onDrop }) => (
    <Col xs={ 12 } sm={ 6 } md={ 3 } id={ id } className="board">
        <h3>{ title }</h3>
        <Container
            maxWidth="sm"
            id={ `container-${ id }` }
            onDragOver={ e => onDragOver(e) }
            onDrop={ e => onDrop(e, id) }
        >
            <Notes id={ id } />
        </Container>
    </Col>
);

Board.displayName = "Board";

export default Board;