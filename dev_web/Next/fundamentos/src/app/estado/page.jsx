"use client" // se o componente tiver interação com eventos, ele precisa ser um Client Component (executam no navegador e possuem eventos)
import { useState } from "react";
import Layout from "@/components/Layout";
import style from "./estado.module.css"

export default function Estado() {

    // react hooks
    const [ numero, setNumero ] = useState(0) // # [ valor, f() ]

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button className={style.botao} onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}