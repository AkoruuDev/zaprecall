import React from "react";

const deck = [
    {question: "O que é JSX?", answere: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é __", answere: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answere: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answere: "expressões"},
    {question: "O ReactDOM nos ajuda __", answere: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __", answere: "gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __", answere: "passar diferentes informações para componentes "},
    {question: "Usamos estado (state) para __", answere: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

function Cards() {
    const [icon, setIcon] = React.useState("play-outline");
    const [color, setColor] = React.useState("");

    let cardAnswered = "";

    function toAnswere(ans) {
        cardAnswered = ans;
        console.log(cardAnswered);
        backHomeCard();
    }

    function backHomeCard() {
        changeIcon();
    }

    function changeIcon() {
        if(cardAnswered === "not") {
            setIcon("close-circle");
            setColor("red-text");
        } else if (cardAnswered === "almost") {
            setIcon("help-circle");
            setColor("yellow-text");
        } else if (cardAnswered === "zap") {
            setIcon("checkmark-circle");
            setColor("green-text");
        }
    }

    return(
        <div className="content">
            {deck.map((ask, i) => (
                <div className="cardContent" key={i+1}>
                    <div className="askNumber">
                        <p className={color}>Pergunta {i+1}</p>
                        <span className={color}><ion-icon name={icon}></ion-icon></span>
                    </div>
                    <div className="askContent">
                        <p>{ask.question}</p>
                        <img src="./docs/ZapRecall-Recursos/setinha.png" alt="turn" className="turnIcon" />
                    </div>
                    <div className="askAnswere">
                        <p>{ask.answere}</p>
                        <div className="boxButton">
                        <div className="answereButton red" onClick={() => toAnswere("not")}>Não lembrei</div>
                        <div className="answereButton yellow" onClick={() => toAnswere("almost")}>Quase não lembrei</div>
                        <div className="answereButton green" onClick={() => toAnswere("zap")}>Zap</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;