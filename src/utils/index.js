export const getTitle = id =>
    id.split('-').map(id => id.charAt(0).toUpperCase() + id.slice(1)).toString().replace(',', ' ');