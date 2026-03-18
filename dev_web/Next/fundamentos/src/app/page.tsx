import Navegador from "../components/Navegador"

function Inicio() {

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>

      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/usandoComp" texto="Exemplo" cor="#9400d3" />
      <Navegador destino="/jsx" texto="JSX" cor="crimson" />
      <Navegador destino="/navegacao" texto="Navegação #1" cor="green" />
      <Navegador destino="/cliente/sp-2/123" texto="Navegação #2" cor="blue" />
      <Navegador destino="/estado" texto="Componente com Estado" cor="pink" />
    </div>
  )
}

export default Inicio