import pageOnActive from "./App"

function Welcome() {
    return(
        <div className="welcome">
            <img src="./docs/ZapRecall-Recursos/logo.png" alt="Logo" className="logo" />
            <h1 className="nameGame">ZapRecall</h1>
            <div className="button" onClick={pageOnActive}>Iniciar Recall!</div>
        </div>
    )
}

export default Welcome;