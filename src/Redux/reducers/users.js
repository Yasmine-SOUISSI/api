const intialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null
};

export const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                loading: false,
            };
        case "LOGIN":
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            };
        default:
            return state;
    }
};
