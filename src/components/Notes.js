import React, { Fragment } from 'react';
import Note from './../containers/Note';

const Notes = ({ id, notes }) => (
    <Fragment>
        { id === 'ideas' && <Note /> }
        {
            notes.filter(note => note.type === id).map(note => {
                const { _id, text } = note;
                return (
                    <Note
                        key={ _id }
                        _id={ _id }
                        text={ text }
                    />
                );
            })
        }
    </Fragment>
);

Notes.displayName = "Notes";

export default Notes;