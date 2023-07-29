import React, { useState } from 'react'
import VideoModel from '../VideoModel/VideoModel';

const VideoPlayerWithImage = ({onClick}) => {
    // const [showModal, setShowModal] = useState(false);

    // const openVideoModal = () => {
    //     setShowModal(true);
    // };

    // const closeVideoModal = () => {
    //     setShowModal(false);
    // };

    return (
        <>
        <div className='video-wrapper' onClick={onClick}>
            <picture>
                <source media='(min-width:1160)' srcSet='./Image/bp-1160.png' />
                <source media='(min-width:900)' srcSet='./Image/bp-900.png' />
                <source media='(min-width:600)' srcSet='./Image/bp-600.png' />
                <source media='(min-width:361)' srcSet='./Image/bp-361.png' />
                <source media='(min-width:360)' srcSet='./Image/bp-360.png' />
                <img alt='video teaser image' src='./Image/videoImage.png' loading='auto' />
            </picture>
            
        </div>
        </>
    )
}

export default VideoPlayerWithImage