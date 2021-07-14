import React from 'react';
import './QuestionCard.scss'

const QuestionCard = ({data, nextClick}) => {

    let questionData = data.data
    let questionType = data.type


    const handleNext = (e) => {
        nextClick()
    }

    return (
    <div className='question-card card'>
        <p>Oh hi</p>

        <div className='contorlBoard'>
            <p onClick={(e) => handleNext(e)}>Next</p>
        </div>
    </div>
)}

export default QuestionCard;