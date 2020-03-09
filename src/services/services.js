//import axios from 'axios';
const API = 'https://getworks-api.herokuapp.com/api/';

const AuthService = {
  login: (payload, props) => (
    new Promise(async(resolve, reject) => {

      const url = `${API}User/login`;
      // const headers = new Headers ({
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // })
      // const headers = {
      //   'Content-Type': 'application/json',
      // }
      const body = {
        nickname: payload.email,
        password: payload.password
      }

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      }).then(response => response.json())
        .then(json => {
          console.log('response service: ', json);
          const userDemo = {};
          resolve(userDemo)
        })
        .catch(err => reject('error'));

      // axios.post()
      //   .then(response => {
      //     if (response.error) {
      //       return reject(response.error);
      //     }
      //     console.log('response service: ', response);
      //     // localStorage.setItem('Token', response.data.accessToken);
      //     // localStorage.setItem('user', JSON.stringify(response.data));
      //     // const getUser = new Promise((success, fail) => {
      //     //   resolve(AuthService.getUserId(response.data.userId));
      //     // });
      //     //response.user = getUser;
      //     const userDemo = {};
      //     resolve(userDemo);
      //   })
      //   .catch(handleError)
      //   .catch(err => reject(err));
    })
  ),
  // getUserId: (id) => (
  //   new Promise((resolve, reject) => {
  //     const headers = httpHeader({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     });
  //
  //     httpRequest.get({
  //       url: `${API}security/users/get/${id}`,
  //       headers
  //     })
  //       .then(response => {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //         resolve(response.data);
  //       })
  //       .catch(handleError)
  //       .catch(err => err);
  //   })
  // ),
  // logout: () => {
  //   history.go('/login');
  //   localStorage.clear();
  // },
};

export {
  AuthService
};
