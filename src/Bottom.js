function Bottom({Answered, allQuestions, icons}) {
    return(
        <div className="bottom">
            <p>{Answered}/{allQuestions} CONCLUÍDOS</p>
            <div className="icon-asks">
                {icons?.map(icon => (
                    <span className={icon}>
                        <ion-icon name={icon}></ion-icon>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Bottom;