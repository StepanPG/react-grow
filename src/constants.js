export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const INIT_STATE = {
    lastUserId: 2,
    users: [
        {
            id: 1,
            name: 'Stepan',
            age: 21,
            location: { country: 'Belarus', city: 'Minsk' },
        },
        {
            id: 2,
            name: 'Mike',
            age: 33,
            location: { country: 'USA', city: 'San Francisco' },
        },
    ],
};
