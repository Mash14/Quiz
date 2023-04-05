import React,{useState,useEffect} from 'react';

function Animation() {
    
    const [mode,changeMode] = useState('home')
    const [questionType,modifyQuestionType] = useState()
    const [questions,setQuestions] = useState([])

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

    function easyQuestions() {
        changeMode('questions')
        modifyQuestionType('easy')
    }
    function mediumQuestions() {
        changeMode('questions')
        modifyQuestionType('medium')
    }
    function hardQuestions() {
        changeMode('questions')
        modifyQuestionType('hard')
    }
    console.log(questions)

    return ( 
        <React.Fragment>
            <h1>Cartoons & Animations</h1>
            {mode === 'home' && 
                <div className='difficulty'>
                    <button onClick={easyQuestions} className='difficulty-buttons'>Easy</button>
                    <button onClick={mediumQuestions} className='difficulty-buttons'>Medium</button>
                    <button onClick={hardQuestions} className='difficulty-buttons'>Difficult</button>
                </div>
            }
            {mode === 'questions' &&
                <div className=''>

                </div>
            }

        </React.Fragment>
    );
}

export default Animation;