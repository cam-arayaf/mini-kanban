import React, { Fragment } from 'react';
import Note from './../containers/Note';

const Notes = ({ class_name, notes }) => (
    <Fragment>
        { class_name === 'ideas' && <Note /> }
        {
            notes.filter(note => note.type === class_name).map(note => {
                const { _id, type, text } = note;
                return (
                    <Note
                        key={ _id }
                        _id={ _id }
                        type={ type }
                        text={ text }
                    />
                );
            })
        }
    </Fragment>
);

Notes.displayName = "Notes";

export default Notes;