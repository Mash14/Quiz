import React,{useEffect, useState} from "react";
import { nanoid } from "nanoid";

function Question(props) {
    const [majibu,setAnsw] = useState(props.question.answers)
    const [majibu2,setMajibu2] = useState([])
    
    useEffect(()=> {
        let setMajibu = [];
        for(let i in majibu) {
            let x = {}
            if (majibu[i] === props.question.selected) {
                x.ans = majibu[i];
                x.selected = true; 
                x.id = nanoid()
            } else {
                x.ans = majibu[i];
                x.selected = false; 
                x.id = nanoid()
            }
            // console.log(majibu)
            setMajibu.push(x)
        }
        setMajibu2(setMajibu)
    },[majibu])

    function chooseAnswer(ans,id) {
        setMajibu2(prevMajibu => (
            prevMajibu.map(jibu => {
                return jibu.id === id ? {...jibu, selected : true} : {...jibu, selected : false}
            }) 
        ))
        props.choosenAnswer(ans,props.question.id)
    }

    function markedAnswers(answer)  { 
        let classes = '';
        if (answer === props.question.correct_answer) {
            classes += 'answer-text right-answer'
        } else if (answer === props.question.selected && answer !== props.question.correct_answer) {
            classes += 'answer-text wrong-answer wrong-answers'
        } else {
            classes += 'answer-text wrong-answers wrong-answers-2'
        }
        // return classes += answer === props.question.correct_answer? 'answer-text wrong-answer' : 'answer-text';
        return classes ;
    }
    
    

    const answersElement = props.finished === false ? majibu2.map((answer) => {
            return (
                <div onClick={() => chooseAnswer(answer.ans,answer.id)} key={answer.id} className="answer">
                    <div className={answer.selected ? 'answer-text selected answer-text-before' : 'answer-text answer-text-before'}>{answer.ans}</div>
                </div>
            )
        })
        :
        majibu2.map(answer => {
            return (
                <div  key={answer.id} className="answer">
                    <div className={markedAnswers(answer.ans)}>{answer.ans}</div>
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