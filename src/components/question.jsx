import React from "react";

function Question(props) {
    return ( 
    <React.Fragment>
        <p className='question-text' >{props.question.question}</p>
        <div className="answers">
            {props.question.answers.map((answer,index) => {
                return (<div key={index} className="answer">
                            <div className='answer-text'>{answer}</div>
                        </div>)
            })}
        </div>
        
    </React.Fragment> 
    );
}

export default Question;