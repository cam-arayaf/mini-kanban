import { actions } from './index';

const { GET_NOTES } = actions;

export const getNotes = () => ({ type: GET_NOTES });