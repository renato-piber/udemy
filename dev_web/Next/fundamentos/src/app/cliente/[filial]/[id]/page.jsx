import Layout from "@/components/Layout";

export default async function NavegacaoDinamica({ params }) {

    const { id, filial } = await params
    console.log(id)
    return (
        <Layout titulo="Navegacao Dinamica">
            <div>id:{id}</div>
            <div>filial:{filial}</div>
        </Layout>
    )
}