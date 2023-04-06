import React,{useState,useEffect} from 'react';
import { nanoid } from 'nanoid';
import Question from './question';

function Animation() {
    
    const [mode,changeMode] = useState('home')
    const [questionType,modifyQuestionType] = useState()
    const [questions,setQuestions] = useState([])
    const [maswali,setMaswali] = useState([])
    const [answers,setAnswers] = useState({'0':'','1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':'','9':''})

    // Bring data from api
    useEffect(()=>{
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
    
    // Set apprpriate fields to questions
    useEffect(()=> {
        let setQuestion = []
        questions.forEach(question => {
            setQuestion.push({id:nanoid(),
                answers:shuffleArray([...question.incorrect_answers,question.correct_answer]),
                question:question.question,
                correct_answer:question.correct_answer,
                selected:null,
                checked:false})
        })
        setMaswali(setQuestion)
            
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
    function sendAnswer(answer,id) {
        setMaswali(prevMaswali => (
            prevMaswali.map(swali => {
                return swali.id === id ? {...swali,selected:answer,checked:true} : swali
            })
        ))
        console.log(maswali)
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
                        return <div key={question.id} className='question-ind' >
                                <Question 
                                    question={question}
                                    choosenAnswer={sendAnswer}
                                />
                              
                                
                                
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