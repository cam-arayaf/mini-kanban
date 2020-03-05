export const add = () => ({ type: 'ADD' });
export const save = _id => ({ type: 'SAVE', _id });
export const remove = _id => ({ type: 'REMOVE', _id });
export const previous = _id => ({ type: 'PREVIOUS', _id });
export const next = _id => ({ type: 'NEXT', _id });