import Layout from "@/components/Layout"
import Cabecalho from "@/components/Cabecalho"

function App() {
    return (
        /* para usar componentes n devemos instancia-las como funcoes e sim como elementos de React */

        <Layout titulo="Usando Componentes">
            <div>
                <Cabecalho nome="xyz" idade={123} ehlegal={true} />
                <Cabecalho titulo="Next.js & React" />
                <Cabecalho titulo="Aprenda Next na prática" />
            </div>
        </Layout>


        /* n podemos retornar dois objetos transversaveis ao mesmo tempo */
    )
}

export default App