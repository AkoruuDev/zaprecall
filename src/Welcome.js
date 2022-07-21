function Welcome(props) {
    return(
        <div className="welcome">
            <img src="./docs/ZapRecall-Recursos/logo.png" alt="Logo" className="logo" />
            <h1 className="nameGame">ZapRecall</h1>
            <div className="button" onClick={props.page}>Iniciar Recall!</div>
        </div>
    )
}

export default Welcome;