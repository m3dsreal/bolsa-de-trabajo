import { AUTH_ACTIONS } from '../actions/authActions';

const user = JSON.parse(localStorage.getItem('user'));

const initState = {
    user: user ? user : null,
};

const authReducer = (state = initState, action) => {

  switch (action.type) {
    case `${AUTH_ACTIONS.USERS_LOGIN}_SUCCEEDED`:
        return { ...state, user: action.payload };

    case `${AUTH_ACTIONS.USERS_LOGIN}_FAILED`:
        return {...state, user: null };

    case `${AUTH_ACTIONS.USERS_LOGOUT}_SUCCEEDED`:
        return {...state, user: null };

    default:
      return state;
  }
};

export default authReducer;
