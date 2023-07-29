import React from 'react'
import PLayer from 'react-player'

const VideoModel = ({ onClose }) => {

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
                        url={'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7'}
                        className='play-video'
                        controls
                        loop
                    />
                </section>
            </div>
        </div>

    )
}

export default VideoModel