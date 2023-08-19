import React from 'react'
import PLayer from 'react-player'

const VideoLoopModel = ({card, onClose}) => {
    console.log(card);
    const handleOverlayClick = (event) => {
        // Check if the click occurred outside the player (the event target is the overlay itself)
        if (event.target === event.currentTarget) {
          onClose();
        }
      };

  return (
    <div className='video-model' onClick={handleOverlayClick}>
            <div className='video-model-content'>
                <section className='model-body'>
                <PLayer
                        url={card.video}
                        className='play-video'
                        controls
                        loop
                        playing
                    />
                </section>
            </div>
        </div>
  )
}

export default VideoLoopModel