import Formulario from "./Formulario"
import Alerta from "./Alerta"
import useLetras from '../hooks/useLetras'
import Letra from "./Letra"

const AppLetras = () => {
   const { alerta, letra, cargando } = useLetras()
   return (
      <>
         <header>Búsqueda de Letras de Canciones</header>
         <Formulario />
         <main>
            {alerta ? <Alerta>{alerta}</Alerta> : 
               cargando ? 'Cargando...' :
               letra ? <Letra/> : 
               <p className="text-center">
                  Busca letras de tus artistas favoritos
               </p>
            }
         </main>
      </>
   )
}

export default AppLetras