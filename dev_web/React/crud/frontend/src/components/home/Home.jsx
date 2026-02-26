import Main from "../template/Main";

function Home(props) {
    return (
        <Main icon="home" title="Início" subtitle="Segundo Projeto do Capítlo de React">
            <div className="display-4">Bem vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React.</p>
        </Main>
    )
}

export default Home