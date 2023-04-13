import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MessageId } from '../pages/MessageId'

export const QuironRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }  />
      <Route path='/mensaje' element={ <MessageId /> }  />

      <Route path='/*' element={ <Navigate to='/' /> }  />
      
    </Routes>
  )
}
