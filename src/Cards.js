import React, { useState } from "react";
import Bottom from "./Bottom";
import Top from "./Top";

const deck = [
    {
        question: "O que é JSX?",
        answere: "Uma extensão de linguagem do JavaScript",
        cardAnswered: false
    },
    {
        question: "O React é __",
        answere: "uma biblioteca JavaScript para construção de interfaces",
        cardAnswered: false
    },
    {
        question: "Componentes devem iniciar com __",
        answere: "letra maiúscula",
        cardAnswered: false
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answere: "expressões",
        cardAnswered: false
    },
    {
        question: "O ReactDOM nos ajuda __",
        answere: "interagindo com a DOM para colocar componentes React na mesma",
        cardAnswered: false
    },
    {
        question: "Usamos o npm para __",
        answere: "gerenciar os pacotes necessários e suas dependências",
        cardAnswered: false
    },
    {
        question: "Usamos props para __",
        answere: "passar diferentes informações para componentes ",
        cardAnswered: false
    },
    {
        question: "Usamos estado (state) para __",
        answere: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        cardAnswered: false
    }
]

const geral = [];

for (let c = 0; c < 4; c++) {
    geral.push(deck[c]);
}

let icon = "play-outline";
let color = "";
let typeCardAnswered = "";

function Asks(props) {
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(false);
    console.log(props);

    const [cardAnswered, setCardAnswered] = React.useState(props.answered);


    function toAnswere(ans) {
        typeCardAnswered = ans;
        console.log(ans)
        setCardAnswered(true);
    }

    function ifRed() {
        let back = false;
        if (typeCardAnswered === "not") {
            back = true;
        }
        return back;
    }

    function ifYellow() {
        let back = false;
        if (typeCardAnswered === "not") {
            back = true;
        }
        return back;
    }

    function ifGreen() {
        let back = false;
        if (typeCardAnswered === "not") {
            back = true;
        }
        return back;
    }

    return (
        <div className="cardContent">
            {!open ?
                <div className="askNumber" onClick={() => setOpen(true)}>
                    <p>Pergunta {props.index}</p>
                    <span>{cardAnswered ? (
                        ifRed ? <ion-icon name="close-circle"></ion-icon> : (
                            ifYellow ? <ion-icon name="help-circle"></ion-icon> : (
                                ifGreen ? <ion-icon name="checkmark-circle"></ion-icon> : ""
                    )   )   ) : <ion-icon name="play-outline"></ion-icon> }
                    </span>
                </div> :
                !response ?
                <div className="askContent">
                    <p>{props.ask}</p>
                    <img src="./docs/ZapRecall-Recursos/setinha.png" alt="turn" className="turnIcon" onClick={() => setResponse(true)}/>
                </div> :
                <div className="askAnswere">
                    <p>{props.aska}</p>
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
    return(
        <>
            <Top />
            <div className="content">
                {deck.map((card, i) => (
                    <Asks
                        index = {i + 1}
                        ask = {card.question}
                        aska = {card.answere}
                        answered = {card.cardAnswered}
                    />
                ))}
            </div>
            <Bottom />
        </>
    )
}

export default Cards;