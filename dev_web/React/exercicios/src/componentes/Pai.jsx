// import Filho from "./Filho"

import { useState } from "react"
import { childrenWithProps } from "../utils/utils"

export const Pai = props =>
    <>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */} {/* aqui esta pegando o props do pai */}
            {/* <Filho {...props} /> */} {/* aqui o fihloh herda os atributos do pai */}
            {/* <Filho {...props} nome="Carla" /> */} {/* sobrescrevendo o nome do pai */}
            {/* {props.children} */} {/* aqui esta dizendo exatamente o ponto no qual eu quero que os componentes sejam renderizados */}

            {childrenWithProps(props)} {/* forma para nao repetir a codigo de heranca de propriedades */}

        </ul>
    </>

// usando render prop
export const PaiRender = ({ children }) => {
    const sobrenome = "Piber"
    return (
        <>
            <ul>{children(sobrenome)}</ul>
        </>
    )
}

