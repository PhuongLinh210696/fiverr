import React from 'react'
import PLayer from 'react-player'

const CategoryVideo = ({ onClose }) => {
    const handleOverlayClick = (event) => {
        // Check if the click occurred outside the player (the event target is the overlay itself)
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <div className='video-only' onClick={handleOverlayClick}>
        <div className="video-container" >
            <section>
                <PLayer
                    url={'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works'}
                    controls
                    loop
                    className='play-video'
                />
            </section>
        </div>
        </div>
    )
}

export default CategoryVideo