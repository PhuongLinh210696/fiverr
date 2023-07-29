import React, { useState } from 'react'
import './Videoloop.scss'
import { video } from '../../Assets/Data/cards';
import VideoServices from './VideoServices/VideoServices';
import Slider from 'infinite-react-carousel';
import VideoLoopModel from './VideoLoopModel/VideoLoopModel';

const VideoLoop = () => {
  const [showVideoModel, setShowVideoModel] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (videoData) => {
    setSelectedVideo(videoData);
    setShowVideoModel(true);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setShowVideoModel(false);
  };
  console.log(video);
  return (
    <div className='v-container'>
      <div className='slider'>
        <Slider slidesPerRow={1}>
          {video.map((item, index) => (
            <div className='' key={index}>
              <VideoServices card={item} onClick={() => openVideoModal(item)}/>
            </div>
          ))}
        </Slider>
      </div>
      <div className='bp-right'>
        <div className='video'>
          {/* <VideoServices onClick={openVideoModal} />\ */}
          {showVideoModel && selectedVideo && (
            <VideoLoopModel card={selectedVideo} onClose={closeVideoModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLoop;