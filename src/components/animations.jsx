import React,{useState,useEffect} from 'react';

function Animation() {
    
    const [mode,changeMode] = useState('home')
    const [questionType,modifyQuestionType] = useState()
    const [questions,setQuestions] = useState([])
    const [maswali,setMaswali] = useState([])
    const [answers,setAnswers] = useState({'0':'','1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':'','9':''})

    useEffect(()=>{
        console.log('now')
        if(questionType === 'easy') {
            fetch('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple')
                .then(response => response.json())
                .then(res => setQuestions(res.results))
        } else if (questionType === 'medium') {
            fetch('https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple')
                .then(response => response.json())
                .then(res => setQuestions(res.results))
        } else if (questionType === 'hard') {
            fetch('https://opentdb.com/api.php?amount=10&category=32&difficulty=hard&type=multiple')
                .then(response => response.json())
                .then(res => setQuestions(res.results))
        }      

    },[questionType])

    useEffect(()=> {
        
        let x = []
        for(let i =0; i<questions.length; i++) {
            console.log('happy')
                
            let p = []
            questions[i].incorrect_answers.map(answer => {
                return p.push(answer)
            })
            p.push(questions[i].correct_answer)
            let shuffledArray = shuffleArray(p)
            questions[i].answers = shuffledArray
            console.log(questions[i].answers)
            x.push(questions[i])
        }
        setMaswali(x)
        console.log(x)
            
    },[questions])

    
    // Get easy questions
    function easyQuestions() {
        changeMode('questions')
        modifyQuestionType('easy')
    }
    // Get medium questions
    function mediumQuestions() {
        changeMode('questions')
        modifyQuestionType('medium')
    }
    // Get hard questions
    function hardQuestions() {
        changeMode('questions')
        modifyQuestionType('hard')
    }
    function returnHome() {
        changeMode('home')
        setQuestions([])
    }
    function sendAnswer(answer,index) {
        let x = {}
        x.index = answer  
        setAnswers(prev => {
            return {...prev,index:answer}
        })
    }

    function submitAnswers() {

        changeMode('answers')
    }
    
    return ( 
        <React.Fragment>
            <h1>Cartoons & Animations Quiz</h1>
            <button onClick={returnHome} className='return'>Back</button>
            {mode === 'home' && 
                <div className='difficulty'>
                    <button onClick={easyQuestions} className='difficulty-buttons'>Easy</button>
                    <button onClick={mediumQuestions} className='difficulty-buttons'>Medium</button>
                    <button onClick={hardQuestions} className='difficulty-buttons'>Difficult</button>
                </div>
            }
            {mode === 'questions' && 
                <div className='questions'>
                    {maswali.map((question,index) => {
                        return <div key={index} className='question-ind' >
                                <p className='question-text' >{question.question}</p>
                                <div className="answers">
                                    <div className="answer">
                                        <div className='answer-text' onClick={()=>sendAnswer(question.answer[0],index)}>{question.answers[0]}</div>
                                    </div>
                                    <div className="answer">
                                        <div className='answer-text' onClick={()=>sendAnswer(question.answer[1],index)}>{question.answers[1]}</div>
                                    </div>
                                    <div className="answer">
                                        <div className='answer-text' onClick={()=>sendAnswer(question.answer[2],index)}>{question.answers[2]}</div>
                                    </div>
                                    <div className="answer">
                                        <div className='answer-text' onClick={()=>sendAnswer(question.answer[3],index)}>{question.answers[3]}</div>
                                    </div>
                                </div>
                                
                                
                            </div>
                    })}
                    <button onClick={submitAnswers} className='difficulty-buttons submit'>Check Answers</button>
                </div>
                // || 
                //  <div className='load'>Loading...</div>)
            }
            {mode === 'answers' && (<div className="answers">Answer</div> || <div>Happy</div>)
            }

        </React.Fragment>
    );
}

export default Animation;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
}