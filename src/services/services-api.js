import axios from 'axios'

const http = axios.create({
  baseURL: "http://localhost:3030",
  // withCredentials: true,
});

export const getUsers = () => { 
  return http.get('/users')
 }


export const getMensajes = () => { 
  return http.get('/mensajes')
 }


// const baseURL = 'http://localhost:3001'
