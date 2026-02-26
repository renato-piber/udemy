import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css"
/* a estrategia de roteamento é com o react router */
import { BrowserRouter } from 'react-router-dom'

import Logo from "../components/template/Logo"
import Nav from "../components/template/Nav"
import Routes from "./Routes"
import Footer from "../components/template/Footer"

function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App