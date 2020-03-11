export const add = () => ({ type: 'ADD' });
export const save = _id => ({ type: 'SAVE', _id });
export const remove = _id => ({ type: 'REMOVE', _id });
export const onDragStart = (e, _id) => ({ type: 'ON_DRAG_START', e, _id });