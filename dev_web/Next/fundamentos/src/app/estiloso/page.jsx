import styles from "./Estiloso.module.css" /* é recomendado que o css module fique na mesma pasta que a page, mas não é obrigatorio */
import Layout from "@/components/Layout"

export default function Estiloso() {
    return (
        <div>
            <Layout titulo="Exemplo de CSS Modularizado">
                <div className={styles.roxo}>
                    <h1>Estilo usando CSS Módulos</h1>
                </div>
            </Layout>
        </div>

    ) 
}

/* a modularizacao é tratada de uma forma com que ela atinja apenas um componente, e nao de forma global */