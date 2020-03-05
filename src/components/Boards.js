import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import Board from './Board';

const Boards = ({ boards }) => (
    <Grid>
        <Row>
            {
                boards.map(board => {
                    const { _id, class_name, title } = board;
                    return (
                        <Board
                            key={ _id }
                            _id={ _id }
                            class_name={ class_name }
                            title={ title }
                        />
                    );
                })
            }
        </Row>
    </Grid>
);

Boards.displayName = "Boards";

export default Boards;