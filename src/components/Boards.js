import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import Board from './../containers/Board';
import { getTitle } from './../utils';

const Boards = ({ boards }) => (
    <Grid>
        <Row>
            {
                boards.map(board => <Board key={ board } id={ board } title={ getTitle(board) } />)
            }
        </Row>
    </Grid>
);

Boards.displayName = "Boards";

export default Boards;