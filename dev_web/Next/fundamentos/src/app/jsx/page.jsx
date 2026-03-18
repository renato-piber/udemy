import Layout from "@/components/Layout"

export default function Jsx() {
    /* fora do return é js */
    // const a = 4
    // const b = 3
    // console.log(a * b)

    const obj = { nome: "joao", idade: 30 }

    /* é possivel armazenar jsx em js */
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    /* dentro do return é jsx, js apenas com {} */
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {/* <h1>JSX é um conceito central</h1>
            {a * b}
            <br />
            {Math.random()}
            <h2>{"muito legal".toUpperCase()}</h2>
            */}

                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify(obj)}
                </p>
            </div>
        </Layout>
    )
}