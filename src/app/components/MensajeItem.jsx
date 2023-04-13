import React from 'react'


export const MensajeItem = ({ id_mensaje, name, text, created_at, state, category }) => {
     
      if (!id_mensaje)
        return (
          <center>
            <div className="mt-5 p-5 bg-white">
              <h1 className="mt-5 p-5">Loading</h1>
            </div>
          </center>
        );
   
      return (
        <>
          <div>
            {id_mensaje} - {name} - {text} - {created_at} - {state} - {category}
          </div>
        </>
  )
}