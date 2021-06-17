import React, { useState }from 'react';
import { Link, useLocation } from "react-router-dom";
import FlashCard from '../Comps/FlashCard/FlashCard'
import './Desk.scss';

const Desk = () => {


    const location = useLocation()
    const { data } = location.state
    const arrayCopy = [...data.sections]
    const [shuffledData, setShuffledData] = useState(shuffle(arrayCopy));
    const [active, setActive] = useState(shuffledData[0]);


   
    const clicked = () => {
        shuffledData.splice(0, 1)
        if (shuffledData.length == 1) {
            setShuffledData(shuffle(arrayCopy))
        }
        setActive(shuffledData[0])
    }

    function shuffle(array) {
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

    return (
        <div className='page desk'>
            <div className='desk-nav'>
                <Link to={{
                        pathname: "/freshenUp",}}>
                        <p className="back"><i class="fas fa-chevron-left"></i> {data.title}</p>
                </Link>
            </div>
            <div className='content desk-content'>
                <FlashCard data={active} onClick={clicked}/>
            </div>
        </div>
    )
}


export default Desk;
