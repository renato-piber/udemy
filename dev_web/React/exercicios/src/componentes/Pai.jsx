// import Filho from "./Filho"

import { childrenWithProps } from "../utils/utils"

export default props =>
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