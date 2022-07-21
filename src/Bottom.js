import React from "react";

function Bottom() {
    let AllQuestions = 4;

    const [Answered, setAnswered] = React.useState(0);

    function answerMoreOne() {
        setAnswered(Answered + 1)
    }
    
    return(
        <div className="bottom">
            <p>{Answered}/{AllQuestions} CONCLUÍDOS</p>
        </div>
    )
}

export default Bottom;