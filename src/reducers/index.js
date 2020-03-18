import { actions } from './../actions';

const initialPayload = { e: null, _id: 0, id: 0 };

export const reducer = (state, { type, payload = initialPayload }) => {
    const { ADD, SAVE, REMOVE, ON_DRAG_START, ON_DRAG_OVER, ON_DROP } = actions;
    const { e, _id, id } = payload;
    const { notes } = state;
    switch (type) {
        case ADD:
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
        case SAVE:
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
        case REMOVE:
            const _idDelete = notes.find(note => note._id === _id)._id;
            if (!_idDelete) return state;
            return { ...state, notes: notes.filter(note => note._id !== _id) };
        case ON_DRAG_START:
            e.dataTransfer.clearData();
            e.dataTransfer.setData('data', `card-${ _id }`);
            return { ...state };
        case ON_DRAG_OVER:
            e.preventDefault();
            return { ...state };
        case ON_DROP:
            const idDnD = Number(e.dataTransfer.getData('data').split('card-')[1]);
            const typeDnD = document.getElementById(`container-${ id }`).id.split('container-')[1];
            return {
                ...state,
                notes: notes.map(note => note._id !== idDnD ? note : { ...note, type: typeDnD })
            };
        default:
            return state;
    }
}