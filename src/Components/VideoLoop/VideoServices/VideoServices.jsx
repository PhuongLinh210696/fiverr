import React from 'react'
// import PLayer from 'react-player'

const VideoServices = ({card, onClick}) => {
    
    console.log(card);
  return (
    <div className='v-grid'>
        <div className='video-left'>
            <div className='v-pic' onClick={onClick}>
                <picture>
                    <img src={card.img} />
                </picture>
            </div>
        </div>
        <div className='video-right'>
            <h5>
                {card.title}
                <span>
                    <img src={card.company}/>
                </span>
            </h5>
            <blockquote className='v-content'>
                <i>
                    "{card.desc}"
                </i>
            </blockquote>
        </div>
    </div>
  )
}

export default VideoServices