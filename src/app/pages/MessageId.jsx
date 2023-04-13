import React, { useEffect, useState } from 'react'
import { getMessage } from '../../services/services-api'

export const MessageId = () => {

  const [mensaje, setMensaje] = useState(null)

  useEffect(() => {
    getMessage(4)
      .then(( data ) => setMensaje( data ))
     
  }, [])
  
console.log(mensaje)
  return (
    <>
      <h1>holaaaa</h1>
    </>
  )
}
