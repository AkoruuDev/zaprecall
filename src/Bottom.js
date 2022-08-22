function Bottom({Answered, allQuestions}) {
    return(
        <div className="bottom">
            <p>{Answered}/{allQuestions} CONCLUÍDOS</p>
        </div>
    )
}

export default Bottom;