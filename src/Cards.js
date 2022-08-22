import React, { useState } from "react";

const deck = [
    {
        question: "O que é JSX?",
        answere: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é __",
        answere: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __",
        answere: "letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answere: "expressões"
    },
    {
        question: "O ReactDOM nos ajuda __",
        answere: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answere: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "Usamos props para __",
        answere: "passar diferentes informações para componentes "
    },
    {
        question: "Usamos estado (state) para __",
        answere: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

const geral = [];

for (let c = 0; c < 4; c++) {
    geral.push(deck[c]);
}

function Asks(props) {
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(false);
    const [cardAnswered, setCardAnswered] = useState(false)
    const [typeCardAnswered, setTypeCardAnswered] = useState('')

    function toAnswere(ans) {
        setCardAnswered(true)
        setTypeCardAnswered(ans);
        setOpen(false);
        setResponse(false);
    }

    return (
        <div className="cardContent">
            {!open ?
                <div className={`askNumber ${typeCardAnswered}`}>
                    <p>Pergunta {props.index}</p>
                    <span>{cardAnswered ? (
                        typeCardAnswered === "not" ? <ion-icon name="close-circle"></ion-icon> : (
                            typeCardAnswered === "almost" ? <ion-icon name="help-circle"></ion-icon> : (
                                typeCardAnswered === "zap" ? <ion-icon name="checkmark-circle"></ion-icon> : ""
                    )   )   ) : <span onClick={() => setOpen(true)}><ion-icon name="play-outline"></ion-icon></span> }
                    </span>
                </div> :
                !response ?
                <div className="askContent">
                    <p>{props.question}</p>
                    <img src="./docs/ZapRecall-Recursos/setinha.png" alt="turn" className="turnIcon" onClick={() => setResponse(true)}/>
                </div> :
                <div className="askAnswere">
                    <p>{props.ans}</p>
                    <div className="boxButton">
                        <div className="answereButton red" onClick={() => toAnswere("not")}>Não lembrei</div>
                        <div className="answereButton yellow" onClick={() => toAnswere("almost")}>Quase não lembrei</div>
                        <div className="answereButton green" onClick={() => toAnswere("zap")}>Zap</div>
                    </div>
                </div>
            }
        </div>
    )
}

function Cards() {
    deck.sort(comparador);

    function comparador() { 
        return Math.random() - 0.5; 
    }

    return(
        <div className="content">
            {deck.map((card, i) => (
                <Asks
                    key = {i}
                    index = {i + 1}
                    question = {card.question}
                    ans = {card.answere}
                />
            ))}
        </div>
    )
}

export default Cards;