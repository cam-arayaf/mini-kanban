import React from 'react';
import Grid from '@material-ui/core/Grid';
import Board from './../containers/Board';
import { getTitle } from './../helpers';

const Boards = ({ boards = ['ideas', 'to-do', 'in-progress', 'done'] }) => (
    <div className="root">
        <Grid container justify="center">
            {
                boards.map(board => <Board key={ board } id={ board } title={ getTitle(board) } />)
            }
        </Grid>
    </div>
);

Boards.displayName = "Boards";

export default Boards;