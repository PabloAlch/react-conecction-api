import { CreateUser } from './CreateUser'
import { AppRouter } from './router/AppRouter'





export const QuironApp = () => {
  return (
    <>
        {/* Rutas para paginas (carpetas auth > router  y app > router)auth y app */}
        {/* <AppRouter /> */}


        {/* Ruta directa prueba axios */}
        <CreateUser />

    </>
  )
}
