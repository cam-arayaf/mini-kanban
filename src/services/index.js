import axios from 'axios';

const api_url = 'https://us-central1-mini-kanban-api-ciaf.cloudfunctions.net/api';

export const getNotes = () => axios.get(`${ api_url }/notes`)
    .then(resp => resp.data.notes)
    .catch(error => console.log(error));

export const postNote = text => axios.post(`${ api_url }/notes`, { text })
    .then(resp => resp.data.note)
    .catch(error => console.log(error));

export const deleteNote = _id => axios.delete(`${ api_url }/notes/${ _id }`)
    .then(resp => resp.data.note)
    .catch(error => console.log(error));

export const putTextNote = (_id, text) => axios.put(`${ api_url }/notes/text/${ _id }`, { text })
    .then(resp => resp.data.note)
    .catch(error => console.log(error));

export const putTypeNote = (_id, type) => axios.put(`${ api_url }/notes/type/${ _id }`, { type })
    .then(resp => resp.data.note)
    .catch(error => console.log(error));