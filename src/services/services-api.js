import axios from 'axios'

const http = axios.create({
  baseURL: "http://localhost:3030",
  // withCredentials: true,
});

export const getUsers = () => { 
  return http.get('/users')
 }


// const baseURL = 'http://localhost:3001'
