import { boards } from './../constants';

const initialState = { boards, notes: [] };

export const reducers = (state = initialState, { type, _id, e }) => {
    const { notes } = state;
    switch (type) {
        case 'ADD':
            const textFieldAdd = document.querySelector('#textFieldAdd');
            if (!textFieldAdd) return state;
            const textAdd = textFieldAdd.value.trim();
            if (!textAdd) return { ...state, textFieldAdd: textFieldAdd.value = '' };
            textFieldAdd.value = '';
            const maxId = Math.max(...notes.map(note => note._id));
            const _idAdd = maxId === -Infinity ? 1 : maxId + 1;
            const typeAdd = 'ideas';
            const note = { _id: _idAdd, type: typeAdd, text: textAdd };
            return { ...state, notes: notes.concat(note) };
        case 'SAVE':
            const textFieldSave = document.querySelector(`#textField${ _id }`);
            if (!textFieldSave) return state;
            const textSave = textFieldSave.value.trim();
            const previousText = notes.find(note => note._id === _id).text;
            if (!textSave || !previousText || previousText === textSave) {
                return {...state, textFieldSave: textFieldSave.value = previousText };
            }
            textFieldSave.value = textSave;
            return {
                ...state,
                notes: notes.map(note => note._id !== _id ? note : { ...note, text: textSave })
            };
        case 'REMOVE':
            const _idDelete = notes.find(note => note._id === _id)._id;
            if (!_idDelete) return state;
            return { ...state, notes: notes.filter(note => note._id !== _id) };
        case 'PREVIOUS':
            const _idPrevious = notes.find(note => note._id === _id)._id;
            if (!_idPrevious) return state;
            return {
                ...state,
                notes: notes.map(note => note._id !== _id ? note : {
                    ...note,
                    type: (
                        note.type === 'to-do' ? 'ideas' :
                        note.type === 'in-progress' ? 'to-do' :
                        'in-progress'
                    )
                })
            };
        case 'NEXT':
            const _idNext = notes.find(note => note._id === _id)._id;
            if (!_idNext) return state;
            return {
                ...state,
                notes: notes.map(note => note._id !== _id ? note : {
                    ...note,
                    type: (
                        note.type === 'ideas' ? 'to-do' :
                        note.type === 'to-do' ? 'in-progress' :
                        'done'
                    )
                })
            };
        default:
            return state;
    }
}