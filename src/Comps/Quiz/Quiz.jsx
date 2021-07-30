import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import {Card, AnswerCard} from './Components/Card'
import './Quiz.scss'


class Quiz extends React.Component {

  constructor(props) {
    const data = [...props.location.state.data]

    super(props);
    this.state = {
      numOfQuestions: data.length,
      cards: [],
      answeredCards: [],
      rawData: data,
      submitted: false
    }
  }


  componentDidMount() {

    this.state.rawData.map((question) => {
      this.shuffle(question.data.options)
    })
    this.shuffle(this.state.rawData)
    this.setState({cards: this.createStarterCards()})
  }



  shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  createStarterCards() {
    let cards = []
    this.state.rawData.map((question, i) => {
      cards.push(<Card data={question.data} key={i} index={i} updateDataOptions={this.updateDataOptions}/>)
    })
    return cards
  }

  updateDataOptions = (parentIndex, index) => {
    let copy = [...this.state.rawData]
    copy[parentIndex].data.options.map((option, i) => {
      if(i === index) {
          option.checked = !option.checked
      }
    })

    this.setState({rawData: copy})
  }

  createAnswerCards() {
    let cards = []
    this.state.rawData.map((question, i) => {
      cards.push(<AnswerCard data={question.data} key={i} index={i} data-index={i}/>)
    })
    return cards
  }

  clicked() {
    this.setState({cards: this.createAnswerCards(), submitted: true})
  }
  
  render(){

    return (
      <div className='quiz'>
        <div className='cards'>
          {this.state.cards}
        </div>
        <div>
          <button className='submit' disabled={this.state.submitted} onClick={() => this.clicked()}>Submit</button>
        </div>
      </div>
    )}
}

export default Quiz;
