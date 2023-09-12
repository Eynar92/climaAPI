import useClima from "../hooks/useClima"

export default function Resultado() {

    const { resultado } = useClima();
    const { name } = resultado

    return (
        <div className="contenedor">
            <h2>El Clima de {name} es: </h2>
        </div>
    )
}
