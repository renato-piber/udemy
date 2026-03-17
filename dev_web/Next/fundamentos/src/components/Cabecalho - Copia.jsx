function Cabecalho(props) {
    // console.log(props) // props é um obj
    /* as propriedades nao podem ser alteradas! sao somente leitura */
    
    return (
        <header>
            <h1>{props.titulo ?? "Mais um exemplo"}</h1>
        </header>
    )
}

export default Cabecalho