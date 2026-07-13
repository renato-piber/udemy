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
      <Navegador destino="/estado" texto="Componente com Estado" cor="brown" />
      <Navegador destino="/integracao_1" texto="Integracao com API" cor="#42a9a9" />
      <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#fa054a" />
    </div>
    )
}

export default Inicio