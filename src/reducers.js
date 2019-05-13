import { ADD_USER, DELETE_USER, INIT_STATE } from './constants';

export function usersApp(state = INIT_STATE, action) {
    switch (action.type) {
        case ADD_USER:
            const userId = state.lastUserId + 1;
            return {
                ...state,
                users: [...state.users, { id: userId, ...action.user }],
                lastUserId: userId,
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(({ id }) => id !== action.id),
            };

        default:
            return state;
    }
}
