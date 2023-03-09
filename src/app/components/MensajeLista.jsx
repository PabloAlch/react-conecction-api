import { useEffect, useState } from 'react'
import { getMensajes } from '../../services/services-api'
import MensajeItem from './MensajeItem'



export const MensajeLista = () => {
  const [mensaje, setMensaje] = useState(null)

useEffect(() => {
  getMensajes()
  .then(( data ) => setMensaje( data ))
  
}, [])

  return (
    <>
      <ul>

      { mensaje?.data.map( (mensaje)=> (

          <MensajeItem key={mensaje.id} {...mensaje}/>

      ) )}
      </ul>

    </>
  )
}
