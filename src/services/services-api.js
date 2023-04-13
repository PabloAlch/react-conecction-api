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


 export const changeStateMessage = (id) => { 
  return http.post(`/mensajes/read/${id}`)
 }


 export const getMessage = (id) => { 
  return http.get(`/mensajes/${id}`)
 }


// const baseURL = 'http://localhost:3001'
// mensajes/:id