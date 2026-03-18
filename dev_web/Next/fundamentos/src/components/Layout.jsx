import Link from "next/link"
import styles from "../styles/Layout.module.css"
import Cabecalho from "./Cabecalho"

function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Cabecalho {...props} />
                <Link href="/">Voltar</Link> {/* dento de Link um <a> é gerado */}
            </div>
            <div className={styles.container}>
                <div className={styles.conteudo}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout