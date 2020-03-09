import { AuthService } from '../../services/services.js';
// esta es la url del login, es post, datos nickname, password
// https://getworks-api.herokuapp.com/api/User/login
/*
* action types
*/

const USERS_LOGIN = 'USERS_LOGIN';
const USERS_LOGIN_STARTED = 'USERS_LOGIN_STARTED';
const USERS_LOGIN_SUCCEEDED = 'USERS_LOGIN_SUCCEEDED';
const USERS_LOGIN_FAILED = 'USERS_LOGIN_FAILED';
const USERS_LOGOUT = 'USERS_LOGOUT_SUCCEDED';

/*
* action creators
*/

const loginUserAccount = (payload) => {
  return (dispatch, getState) => {
      dispatch({ type: USERS_LOGIN_STARTED });
      const getUser = AuthService.login(payload);
      console.log('response action: ', getUser);
      // dispatch({
      //   type: USERS_LOGIN_SUCCEEDED,
      //   payload: AuthService.login(payload)
      // });
  };
}

// const logoutUserAccount = createActionThunk(USERS_LOGOUT, () => AuthService.logout());

/*
* export action object
*/

const AUTH_ACTIONS = {
  // export all action types
  USERS_LOGIN,
  USERS_LOGOUT,
  // export all action creatos
  loginUserAccount,
  // logoutUserAccount
};

export { AUTH_ACTIONS };
