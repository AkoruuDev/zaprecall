import { useState } from "react";

function Bottom({Answered, allQuestions, icons}) {
    const [message, setMessage] = useState(false)
    const [messageGood, setMessageGood] = useState(true)

    if(Answered === allQuestions && icons != 0) {
        setMessage(true);
        console.log(icons) 
    }

    return(
        <div className="bottom">
            {message ?
                messageGood ?
                <div className="bottom-message">
                    <p>Parabéns!</p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                : <div className="bottom-message">
                    <p>Putz...</p>
                    <p>Ainda faltam alguns...</p>
                    <p>Mas não desanime!</p>
                </div> : ""
            }
            <p>{Answered}/{allQuestions} CONCLUÍDOS</p>
            <div className="icon-asks">
                {icons?.map((icon, i) => (
                    <span className={icon} key={i}>
                        <ion-icon name={icon}></ion-icon>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Bottom;