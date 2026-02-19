import { createRoot } from 'react-dom/client' // {} => operador destructuring

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Multiplos, { BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Estado'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const root = createRoot(document.getElementById('root'))
root.render(
    <>
        {/* os nomes das componentes nao podem começar com letra minuscula  */}
        {/* <Primeiro />
        <BomDia nome="Guilherme" idade={10} />
        <Multiplos.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
        <Saudacao tipo="Bom dia" nome="Joao" /> */}
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" /* sobrenome="Silva" *//>
            <Filho nome="Carla"/*  sobrenome="Silva" *//>
        </Pai>

    </>
)