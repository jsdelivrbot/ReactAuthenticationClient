import axios from 'axios'
import {browserHistory} from 'react-router'
import {AUTH_USER,AUTH_ERROR,UNAUTH_USER} from './types'

const ROOT_URL = 'http://localhost:3090';

export function signInUser({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`,{email, password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token',response.data.token);
        browserHistory.push('/feature');
      })
      .catch(()=>{
        dispatch(authError('Bad Login Info'));
      })
  }
}
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }

}
export function signOutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }

}
