import { Route, Routes } from 'react-router-dom'
import { QuironRoutes } from '../app/routes/QuironRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'


export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path='/auth/*' element={ <AuthRoutes /> }/>

      {/* App */}
      <Route path='/*' element={ <QuironRoutes /> }/>
      <Route />
    </Routes>
  )
}
