import React from "react";

import Bottom from "./Bottom";
import Cards from "./Cards";
import Top from "./Top";

function Content() {
    const [Answered, setAnswered] = React.useState(0);
    const [allQuestions, setAllQuestions] = React.useState(0);

    function answerMoreOne() {
        setAnswered(Answered + 1)
    }

    return(
        <>
            <Top />
            <Cards answerMoreOne={answerMoreOne} setAllQuestions={setAllQuestions} />
            <Bottom Answered={Answered} allQuestions={allQuestions} />
        </>
    )
}

export default Content;