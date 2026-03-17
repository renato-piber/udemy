"use client" // se o componente tiver interação com eventos, ele precisa ser um Client Component (executam no navegador e possuem eventos)
import { useState } from "react";
import Layout from "../../components/Layout";

export default function Estado() {

    const { numero, numeroState } = useState(0)

    function incrementar() {
        let numeroIncrementado = numero + 1
        numeroState(numeroIncrementado)
    }

    return (

        <Layout titulo="Componente com Estado">
            <p>{numero}</p>
            <button onClick={incrementar}>Incrementar</button>

        </Layout>
    )
}