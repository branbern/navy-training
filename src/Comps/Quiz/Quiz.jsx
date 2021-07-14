import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import QuestionCard from './Components/QuestionCard'

import './Quiz.scss'

const Quize = () => {
  const location = useLocation()
  const data = location.state.data
  const [questionList, setQuestionList] = useState(data);

  const getNextQuestion = () => {
    let old = [...questionList];
    let first = old.shift()
    setQuestionList(old)
  }

  const getInitialCard = () => {
    const cards = []
    console.log(questionList, 'banan')
    questionList.map((question) => {
      cards.push(<QuestionCard data={question} nextClick={() => getNextQuestion()}/>)
    })
    return cards[0]
  }


  return (
    <div className='quiz'>
      {getInitialCard()}
    </div>
  )}

export default Quize;