import React, { useState } from "react";
import './Card.scss'

export const Card = (data) => {
    let text = data.data.text
    let options = [...data.data.options]

     return (
      <div className='card' key={data.index}>
            <p><b>{data.type}</b></p>
            {text.map((t) => {return <p>{t}</p>})}
            <ul id="options-list">
                {options.map((question, index) => {
                    return (
                        <li key={index} key={index}>
                            <div className="left-section">
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={question.text}
                                value={question.correct}
                                checked={question.checked}
                                onChange={() => data.updateDataOptions(data.index, index)}/>
                                <label style={{color: question.color}} htmlFor={`custom-checkbox-${index}`}>{question.text}</label>
                            </div>
                        </li>
                    );
                })}
            </ul>
      </div>)
  }


export const AnswerCard = (data) => {
    let text = data.data.text
    let options = [...data.data.options]

    options.map((o) => {
        if(o.correct) {
            o.color = 'green'
        } else if(o.checked && !o.correct) {
            o.color = 'red'
        }
    })

     return (
      <div className='card' key={data.index}>
            <p><b>{data.type}</b></p>
            {text.map((t) => {return <p>{t}</p>})}
            <ul id="options-list">
                {options.map((question, index) => {
                    return (
                        <li key={index} key={index}>
                            <div className="left-section">
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={question.text}
                                value={question.correct}
                                checked={question.checked}/>
                                <label style={{color: question.color}} htmlFor={`custom-checkbox-${index}`}>{question.text}</label>
                            </div>
                        </li>
                    );
                })}
            </ul>
      </div>)
  }
