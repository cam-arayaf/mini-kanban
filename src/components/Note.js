import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Card, CardActions, CardContent, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const IconBtn = ({ onClick, icon }) => (
    <IconButton onClick={ onClick } size="small">
        { icon }
    </IconButton>
);

const IdeaAndDone = ({ _id, type, remove, previous, next }) => (
    <Fragment>
        <Col xs={ 6 }>
            <IconBtn
                onClick={ type === 'ideas' ? () => remove(_id) :
                    () => previous(_id)
                }
                icon={ type === 'ideas' ? <DeleteIcon /> : <SkipPreviousIcon /> }
            />
        </Col>
        <Col xs={ 6 }>
            <IconBtn
                onClick={ type === 'ideas' ? () => next(_id) :
                    () => remove(_id)
                }
                icon={ type === 'ideas' ? <SkipNextIcon /> : <DeleteIcon /> }
            />
        </Col>
    </Fragment>
);

const ToDoAndInProgress = ({ _id, remove, previous, next }) => (
    <Fragment>
        <Col xs={ 4 }>
            <IconBtn
                onClick={ () => previous(_id) }
                icon={ <SkipPreviousIcon /> }
            />
        </Col>
        <Col xs={ 4 }>
            <IconBtn
                onClick={ () => remove(_id) }
                icon={ <DeleteIcon /> }
            />
        </Col>
        <Col xs={ 4 }>
            <IconBtn
                onClick={ () => next(_id) }
                icon={ <SkipNextIcon /> }
            />
        </Col>
    </Fragment>
);

const Buttons = ({ _id, type, remove, previous, next }) => (
    type === 'ideas' || type === 'done' ?
        <IdeaAndDone _id={ _id } type={ type } remove={ remove } previous={ previous } next={ next } /> :
        <ToDoAndInProgress _id={ _id } remove={ remove } previous={ previous } next={ next } />
);

const Note = ({ _id, type, text, add, save, remove, previous, next }) => (
    <Card>
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
        <CardActions>
            <Grid>
                <Row>
                    {
                        _id &&
                        <Buttons
                            _id={ _id }
                            type={ type }
                            remove={ remove }
                            previous={ previous }
                            next={ next }
                        />
                    }
                </Row>
            </Grid>
        </CardActions>
    </Card>
);

Note.displayName = "Note";

export default Note;