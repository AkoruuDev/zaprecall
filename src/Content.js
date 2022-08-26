import React from "react";

import Bottom from "./Bottom";
import Cards from "./Cards";
import Top from "./Top";

function Content() {
    const [Answered, setAnswered] = React.useState(0);
    const [allQuestions, setAllQuestions] = React.useState(0);
    const [icons, setIcons] = React.useState([]);

    function answerMoreOne() {
        setAnswered(Answered + 1)
    }

    function getIcons(ans) {
        setIcons([
            ...icons,
            ans
        ])
    }

    return(
        <>
            <Top />
            <Cards answerMoreOne={answerMoreOne} setAllQuestions={setAllQuestions} getIcons={getIcons} />
            <Bottom Answered={Answered} allQuestions={allQuestions} icons={icons} />
        </>
    )
}

export default Content;