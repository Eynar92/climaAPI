import Formulario from './Formulario'
import Resultado from './Resultado'
import LoadingSpinner from './LoadingSpinner';
import useClima from '../hooks/useClima'

export default function AppClima() {

    const { resultado, cargando, noResultado } = useClima();
    console.log(noResultado);
    return (
        <>
            <main className='dos-columnas'>
                <Formulario />

                {cargando ? <LoadingSpinner /> :
                    resultado?.name ? <Resultado /> :
                        noResultado ? <p>{noResultado}</p> :
                            <p>El clima se va a mostrar aquí</p>}
            </main>
        </>
    )
}
