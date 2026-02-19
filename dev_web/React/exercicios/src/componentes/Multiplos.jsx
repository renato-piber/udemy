
// export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
// export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

// const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
const BoaTarde = ({nome}) => <h1>Boa Noite {nome}!</h1> // usando destructuring

const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export { BoaTarde, BoaNoite }
export default { BoaTarde, BoaNoite }