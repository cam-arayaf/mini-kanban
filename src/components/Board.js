import React from 'react';
import { Col } from 'react-flexbox-grid';
import { Container } from '@material-ui/core';
import Notes from './../containers/Notes';

const Board = ({ _id, class_name, title }) => (
    <Col xs={ 12 } sm={ 6 } md={ 3 } className={ class_name }>
        <h3>{ title }</h3>
        <Container maxWidth="sm" id={ _id }>
            {
                <Notes
                    class_name={ class_name }
                />
            }
        </Container>
    </Col>
);

Board.displayName = "Board";

export default Board;