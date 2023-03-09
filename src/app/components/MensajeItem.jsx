




import React from 'react'

export const MensajeItem = ({ id,  texto, fecha, id_categoria, id_usuario }) => {
  
  if (!id)
  return (
    <center>
      <div className="mt-5 p-5 bg-white">
        <h1 className="mt-5 p-5">Loading</h1>
      </div>
    </center>
  );

return (
  <>
    <li>
      <p>
        <strong className='mt-5'>id: </strong> {id} 
        <strong className='mt-5'>Texto: </strong> {texto}
        <strong className='mt-5'>id_categoria: </strong> {id_categoria}
        <strong className='mt-5'>id_usuario: </strong> {id_usuario}

      </p>
    </li>
  </>
)

}



export default MensajeItem;