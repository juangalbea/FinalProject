import axios from 'axios';

export default class AuthServices {
  constructor(){
    this.service = axios.create({
      baseURL: process.env.REACT_APP_URL,  //'http://localhost:5000/auth'
      withCredentials: true
    })
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  login = (username, password)=>{
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = ()=>{
    return this.service.get('/userData')
  .then(response => response.data)
  }

  logout = ()=>{
    return this.service.get('/logout')
  .then(response => response.data)
  }




}