import { actions } from './index';

const { ADD, SAVE, REMOVE, ON_DRAG_START } = actions;

export const add = () => ({ type: ADD });
export const save = _id => ({ type: SAVE, payload: { _id } });
export const remove = _id => ({ type: REMOVE, payload: { _id } });
export const onDragStart = (e, _id) => ({ type: ON_DRAG_START, payload: { e, _id } });