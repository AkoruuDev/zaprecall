import React, { useEffect, useState } from "react";
import { Deck } from "./common/Select";

const deckChoiced = Deck;

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
        props.answerMoreOne();
        props.getIcons(ans);
    }

    return (
        <div className="cardContent">
            {!open ?
                <div className={`askNumber ${typeCardAnswered}`}>
                    <p>Pergunta {props.index}</p>
                    <span>{cardAnswered ? (
                        typeCardAnswered === "close-circle" ? <ion-icon name="close-circle"></ion-icon> : (
                            typeCardAnswered === "help-circle" ? <ion-icon name="help-circle"></ion-icon> : (
                                typeCardAnswered === "checkmark-circle" ? <ion-icon name="checkmark-circle"></ion-icon> : ""
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
                        <div className="answereButton red" onClick={() => toAnswere("close-circle")}>Não lembrei</div>
                        <div className="answereButton yellow" onClick={() => toAnswere("help-circle")}>Quase não lembrei</div>
                        <div className="answereButton green" onClick={() => toAnswere("checkmark-circle")}>Zap</div>
                    </div>
                </div>
            }
        </div>
    )
}

function Cards({ answerMoreOne, setAllQuestions, getIcons }) {
    const deck = [];
    
    for (let c = 0; c < 4; c++) {
        deck.push(deckChoiced[c]);
    }

    useEffect(() => {
        deck.sort(comparador);

        function comparador() { 
            return Math.random() - 0.5;
        }
        setAllQuestions(deck.length);
    }, []);

    return(
        <div className="content">
            {deck.map((card, i) => (
                <Asks
                    answerMoreOne = {answerMoreOne}
                    key = {i}
                    index = {i + 1}
                    question = {card.question}
                    ans = {card.answere}
                    getIcons = {getIcons}
                />
            ))}
        </div>
    )
}

export default Cards;