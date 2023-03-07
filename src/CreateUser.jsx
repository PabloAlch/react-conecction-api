import { useEffect, useState } from 'react'

import { getUsers } from './services/services-api'



export const CreateUser = () => {
  const [users, setUsers] = useState(null)

useEffect(() => {
  getUsers()
  .then(( data ) => setUsers( data ))
  
}, [])

console.log(users?.data)

  return (
    <>
      <h1>Pagina Principal</h1>
      <p>data</p>
      <ul>

      </ul>

      { users?.data.map( (user)=> (
        <>
          <li key={user.id}><strong>Nombre: </strong> {user.nombre}  <strong>contraseña: </strong> {user.email}</li>
        </>
      ) )}
      
      <p>data</p>
    </>
  )
}
