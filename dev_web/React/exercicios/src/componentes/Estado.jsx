// usando funcoes (forma mais moderna)
import { useState } from 'react'

export default function Saudacao({ tipo, nome }) {
    // aqui declaramos as variaveis e funcoes de estado
    // obs.: nomes de estados props devem ser diferentes
    const [tipoState, setTipo] = useState(tipo) // => derivar estado de props (pode gerar inconsistencias)
    const [nomeState, setNome] = useState(nome)

    // estruturamos as funcoes que evocam as funcoes de setState
    function changeTipo(e) {
        setTipo(e.target.value)
    }

    function changeNome(e) {
        setNome(e.target.value)
    }

    // retornamos os elementos
    return (
        <>
            <h1>{tipoState} {nomeState}!</h1>
            <hr />
            <input type="text" placeholder="Tipo..." value={tipoState} onChange={changeTipo}/>
            <input type="text" placeholder="Nome..." value={nomeState} onChange={changeNome}/>
        </>
    )
}


import { Component } from "react" // o uso de component nao é recomendado

export default class Saudacao extends Component {
    /* 
    No React, a alteração do estado possui apenas uma via: estado -> componente => (componente controlado)
    "O estado é a verdade absoluta"
    */
    constructor(props) {
        super(props) // mantem as propriedades compativeis
        // dentro do constructor o this certamente aponta para a instancia
        this.setTipo = this.setTipo.bind(this) // precisamos usar o bind para linkar as funcoes às instancias corretas
        this.setNome = this.setNome.bind(this)
    }

    state = { // o estado pertence a um unico objeto
        tipo: this.props.tipo, // acessando os parametros
        nome: this.props.nome
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value }) // devemos usar a funcao setState para alterar o state
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        /* para acessar as props é preciso usar this */
        const { tipo, nome } = this.state // somente leitura
        return (
            <>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} /> {/* os inputs precisam de eventos para serem alterados */}
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} /> {/* a arrwo function funciona pois ela tem o this contextualizado com o momento em que foi criada */}
            </>
        )
    }
}