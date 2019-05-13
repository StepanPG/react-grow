import { ADD_USER, DELETE_USER } from './constants';

export function addUserAction(user) {
    return {
        type: ADD_USER,
        user,
    };
}

export function deleteUserAction(id) {
    return {
        type: DELETE_USER,
        id,
    };
}
