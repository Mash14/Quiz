import React,{useState,useEffect} from 'react';
import { nanoid } from 'nanoid';
import Question from './question';
import Navbar from './navbar';

function Nature() {
    
    const [mode,changeMode] = useState('home')
    const [questionType,modifyQuestionType] = useState()
    const [questions,setQuestions] = useState([])
    const [maswali,setMaswali] = useState([])
    const [score,setScore] = useState(0)
    const [finish,completeTest] = useState(false)
    const [modez,setMode] = useState(()=>localStorage.darkMode || null)
    
    // Dark Mode
    let dark
    if (modez === 'true') {
        dark = true
    } else{
        dark = false
    }
    const [darkMode,setDarkMode] = useState(dark || false)

    function setDark() {
        setDarkMode(prev => !prev)
    } 
    useEffect(()=>{
        
        if (darkMode) {
            localStorage.setItem('darkMode','true')
        } else {
            localStorage.setItem('darkMode','false')
        }
        
    },[darkMode])

    // Bring data from api
    useEffect(()=>{
        if(questionType === 'easy') {
            fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
                .then(response => response.json())
                .then(res => setQuestions(res.results))
        } else if (questionType === 'medium') {
            fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple')
                .then(response => response.json())
                .then(res => setQuestions(res.results))
        } else if (questionType === 'hard') {
            fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple')
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
                selected:null})
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
        completeTest(false)
        setScore(0)
        completeTest(false)
        modifyQuestionType('')
        setMaswali([])
    }
    // Get answers from child component
    function sendAnswer(answer,id) {
        setMaswali(prevMaswali => (
            prevMaswali.map(swali => {
                return swali.id === id ? {...swali,selected:answer} : swali
            })
        ))
    }
    

    function markAnswers() {
        // check if all questions have been answwered
        const allAnswered = maswali.every(jibu => jibu.selected != null)
        if(!allAnswered) {
            return ;
        }
        for (let i =0; i < maswali.length;i++) {
            let currentQuestion = maswali[i]
            if(currentQuestion.correct_answer === currentQuestion.selected) {
                setScore(prev => prev + 1)
            } 
        }
        completeTest(true)
    }
    
    return ( 
        <React.Fragment>
            <div className={darkMode ? 'body dark' : "body"}>
                <Navbar dark={setDark} darkMode={darkMode}/>

                <h1>Science : Nature</h1>
                
                {mode === 'home' && 
                    <div className='difficulty'>
                        <button onClick={easyQuestions} className='difficulty-buttons'>Easy</button>
                        <button onClick={mediumQuestions} className='difficulty-buttons'>Medium</button>
                        <button onClick={hardQuestions} className='difficulty-buttons'>Difficult</button>
                    </div>
                }
                {mode === 'questions' && 
                    <div className='questions'>
                        <button onClick={returnHome} title='Back' className='return'><i className="fa-solid fa-arrow-left"></i></button>
                        {maswali.map((question) => {
                            return <div key={question.id} className='question-ind' >
                                    <Question 
                                        question={question}
                                        choosenAnswer={sendAnswer}
                                        finished={finish}
                                    />
                
                                </div>
                        })}
                        {score ? 
                            <div className='ending'>
                                <p className={score > 6 ? 'pass' : 'fail'}>FInal Score {score}/10</p>
                                <button onClick={returnHome} className='difficulty-buttons submit'>Play Again</button>
                            </div>
                            :
                            <button onClick={markAnswers} className='difficulty-buttons submit'>Check Answers</button>
                        }
                    </div>
                }
            </div>

        </React.Fragment>
    );
}

export default Nature;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
}