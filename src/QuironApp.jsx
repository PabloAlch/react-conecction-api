import { MensajeLista } from './app/components/MensajeLista'
import { CreateUser } from './CreateUser'
import { AppRouter } from './router/AppRouter'





export const QuironApp = () => {
  return (
    <>
        {/* Rutas para paginas (carpetas auth > router  y app > router)auth y app */}
        {/* <AppRouter /> */}


        <h2>createUser</h2>
        {/* Ruta directa prueba axios */}
        <CreateUser />

        <h2>mensaje Lista</h2>
        <MensajeLista />

    </>
  )
}
