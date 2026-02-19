// usando <Fragment> ou <div>
export default props => 
    <> {/* um componente nao pode retorna duas tags, elas precisam estar envolvidas por alguma tag */}
        <h1>Bom dia, {props.nome}!!!!</h1> {/* props = propriedades */}
        <h2>Até Breve!</h2>
    </> // 

// usando Array
// export default props => 
//     [
//         <h1 key="h1">Bom dia, {props.nome}!!!!</h1>, /* precisa da prop "key" */
//         <h2 key='h2'>Até Breve!</h2>
//     ] 
        
    