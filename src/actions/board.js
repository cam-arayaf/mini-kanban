import { actions } from './index';

const { ON_DRAG_OVER, ON_DROP } = actions;

export const onDragOver = e => ({ type: ON_DRAG_OVER, payload: { e } });
export const onDrop = (e, id) => ({ type: ON_DROP, payload: { e, id } });