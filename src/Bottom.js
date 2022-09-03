import { useEffect, useState } from "react";

function Bottom({Answered, allQuestions, icons}) {
    const [message, setMessage] = useState(false)
    const [messageGood, setMessageGood] = useState(true)

    useEffect(() => {
        if(Answered === allQuestions && icons != 0) {
            setMessage(true);
            icons.find(icon => {
                if(icon === 'close-circle') {
                    setMessageGood(false);
                }
            });
        }
    }, [Answered])

    return(
        <div className="bottom">
            {message ?
                messageGood ?
                <div className="bottom-message">
                    <p>&#129395; Parabéns!</p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                : <div className="bottom-message">
                    <p>&#128549; Putz...</p>
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