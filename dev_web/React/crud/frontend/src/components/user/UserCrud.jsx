import { useState, useEffect } from "react";
import axios from "axios"
import Main from "../template/Main";

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir"
}

const baseUrl = "http://localhost:3001/users"
const userDefault = { name: "", email: "" }

/* separar em mais componentes */
function UserCrud() {
    const [userState, setUser] = useState(userDefault)
    const [listState, setList] = useState([])

    /* executa antes da renderizacao do objeto */
    useEffect(() => {
        axios(baseUrl)
            .then(resp => setList(resp.data))
    }, [])

    function clear() {
        setUser(userDefault)
    }

    function save() {
        const user = userState /* dica: para alterar algum componente que tenha o state, é indicado criar primeiramente um clone dele e dps substitui-lo. */
        const method = user.id ? "put" : "post" /* qnd um obj ja existe, ele possui um id */
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user) /* o [] é pra dizer que esta enviando uma string */
            .then(resp => {
                const list = getUpdateList(resp.data) /* resp.data == usuario do webservice   */
                setUser(userDefault) /* ele limpa para limpar os inputs */
                setList(list)
            })
    }

    function getUpdateList(user, add = true) {
        const list = listState.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    function updateField(event) {
        const user = { ...userState }
        user[event.target.name] = event.target.value
        setUser(user)
    }

    function renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome</label>
                            <input type="text" name="name" className="form-control" value={userState.name} onChange={updateField} placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">E-mail</label>
                            <input type="text" name="email" className="form-control" value={userState.email} onChange={updateField} placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={save}>Salvar</button>
                        <button className="btn btn-secundary ml-2" onClick={clear}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    function load(user) {
        setUser(user)
    }

    function remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = getUpdateList(user, false)
                setList(list)
            })
    }

    function renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }

    function renderRows() {
        return (
            listState.map(user => {
                return (
                    /* sempre é necessario em um array de jsx, ter a prop key */
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => load(user)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <Main {...headerProps}>
            {renderForm()}
            {renderTable()}
        </Main>
    )
}

export default UserCrud