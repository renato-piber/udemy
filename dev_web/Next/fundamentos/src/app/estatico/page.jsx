
import Layout from "../../components/Layout"

// versao do pages router
// export function getStaticProps() {
//     return {
//         props: {
//             numero: Math.random()
//         }
//     }
// }

// pre-renderizacao estatica (SSG)-> o next armazena no cache e vai servindo esses dadsos
// agora o next decide automaticamente qual tipo de renderizacao usar
// n depende mais de funcoes, mas sim dos componentes (onde serao usadas e qnd?)
async function getDados() {
    // fetch....
    return {
        numero: Math.random()
    }
}

/*

SSR -> sempre busca no servidor
const res = await fetch(url, {
    cache: "no-store"
})

ISR -> atualiza de tempo em tempos
const res = await fetch(url, {
    next: {
        revalidate: 60
    }
})

*/

export default async function Estatico() {
    const dados = await getDados();

    return (
        <Layout titulo="Conteúdo Estático">
            <div>{dados.numero}</div>
        </Layout>
    )
}