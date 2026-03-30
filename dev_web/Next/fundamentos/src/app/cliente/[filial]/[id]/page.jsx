import Layout from "@/components/Layout";

export default async function NavegacaoDinamica({ params }) {

    const { id, filial } = await params // server components do tipo page.jsx precisam de await

    return (
        <Layout titulo="Navegacao Dinamica">
            <div>id:{id}</div>
            <div>filial:{filial}</div>
        </Layout>
    )
}