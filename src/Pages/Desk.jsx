import React, { useState }from 'react';
import { Link, useLocation } from "react-router-dom";
import FlashCard from '../Comps/FlashCard/FlashCard'
import './Desk.scss';

const Desk = () => {
    const location = useLocation()
    const { data } = location.state
    const [showAk, setShowAk] = useState(false);

    console.log(data)

    const checkTexts = () => {
        console.log(data)
        let texts = []
        if (data.text.text)  {
            data.text.text.map((e) => {
                texts.push(<p>{e}</p>)
            })
        }
        return texts
    }

    const checkImages = () => {
        let images = []
        if (data.images)  {
            data.images.map((e) => {
                images.push(<img src={`/${e}`}></img>)
            })
        }
        return images
    }
    const checkFollowings = () => {
        let followings = []
        if (data.text.followings)  {
            data.text.followings.map((e) => {
                followings.push(<li className='followings'>{e}</li>)
            })
        }
        const returned = followings.length > 0 ? <ul>
            {followings}
        </ul> : null
        return returned
    }
  
    const checkAdditionalKnowledge = () => {
        let additionalKnowledge = []
        if (data.text.additionalKnowledge)  {
            data.text.additionalKnowledge.map((e) => {
                additionalKnowledge.push(<p className='additional-knowledge'>{e}</p>)
            })
        }
        const returned = <div className={data.text.additionalKnowledge ? `additional-knowledge-container` : 'hide'}>
            <p className='link' onClick={() => setShowAk(!showAk)}>Additonal Knowledge</p>
            <div className={showAk ? 'additional-knowledge-popout' : 'hide'}>
                <img src='/images/pusheen1.png'></img>
                {additionalKnowledge}
            </div>
        </div>
        return returned
    }

    return (
        <div className='page desk'>

            <div className='back-nav'>
                <Link
                to={{
                    pathname: location.state.back.pathname,
                    state: {
                        data: location.state.back.data,
                    }}}>
                    <i class="fas fa-chevron-left back-chev"></i>
                </Link>
            </div>

            <div className='desk-container'>
                <div className='desk-content'>
                    <h2>{data.title}</h2>
                    {/* texts */}
                    {data.text.text 
                        ? data.text.text.map((e, i) => {
                            return(<p key={i}>{e}</p>)
                        }) 
                        : null
                    }
                    {checkFollowings()}
                    {checkAdditionalKnowledge()}
                    </div>
                    {data.images
                    ?   <div className='images'>
                            {checkImages()}
                        </div>
                    : null}
                </div>
        </div>
    )
}


export default Desk;
