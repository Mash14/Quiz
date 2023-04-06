import React,{useEffect, useState} from "react";

function Question(props) {
    const [majibu,setAnsw] = useState(props.question.answers)
    const [majibu2,setMajibu2] = useState([])
    
    useEffect(()=> {
        let setMajibu = [];
        for(let i in majibu) {
            console.log(majibu[i])
            let x = {}
            if (majibu[i] === props.question.selected) {
                x.ans = majibu[i];
                x.selected = true; 
            } else {
                x.ans = majibu[i];
                x.selected = false; 
            }
            // console.log(majibu)
            setMajibu.push(x)
        }
        setMajibu2(setMajibu)
    },[majibu])

    function chooseAnswer(ans,id) {
        
    }
    

    const answersElement = majibu2.map((answer,index) => {
        return (
            <div onClick={() => props.choosenAnswer(answer.ans,props.question.id)} key={index} className="answer">
                <div className={majibu2.selected ? 'answer-text selected' : 'answer-text'}>{answer.ans}</div>
            </div>
        )
    })
    return ( 
    <React.Fragment>
        <p className='question-text' >{props.question.question}</p>
        <div className="answers">
           {answersElement} 
        </div>
        
    </React.Fragment> 
    );
}

export default Question;