import React, { useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import './TheBestPart.scss';
import VideoPlayerWithImage from './VideoPLayerWithImage/VideoPlayerWithImage';
import VideoModel from './VideoModel/VideoModel';

const TheBestPart = () => {
    const [showVideoModel, setShowVideoModel] = useState(false);

    const openVideoModal = () => {
      setShowVideoModel(true);
    };
  
    const closeVideoModal = () => {
      setShowVideoModel(false);
    };

    return (
        <div className='bp-container'>
            <div className='bp-content'>
                <div className='bp-grid'>
                    <div className='bp-left'>
                        <h2>The best part? Everything.</h2>
                        <ul>
                            <li>
                                <h6>
                                    <span className='bp-check-icon'>
                                        <CheckCircleOutlined style={{ float: 'left', height: '100%', width: '100%' }} />
                                    </span>
                                    Stick to your budget
                                </h6>
                                <p className='left-content'>
                                    Find the right service for every price point. No hourly rates, just project-based pricing.
                                </p>
                            </li>
                            <li>
                                <h6>
                                    <span className='bp-check-icon'>
                                        <CheckCircleOutlined style={{ float: 'left', height: '100%', width: '100%' }} />
                                    </span>
                                    Get quality work done quickly
                                </h6>
                                <p className='left-content'>
                                    Hand your project over to a talented freelancer in minutes, get long-lasting results.
                                </p>
                            </li>
                            <li>
                                <h6>
                                    <span className='bp-check-icon'>
                                        <CheckCircleOutlined style={{ float: 'left', height: '100%', width: '100%' }} />
                                    </span>
                                    Pay when you're happy
                                </h6>
                                <p className='left-content'>
                                    Upfront quotes mean no surprises. Payments only get released when you approve.
                                </p>
                            </li>
                            <li>
                                <h6>
                                    <span className='bp-check-icon'>
                                        <CheckCircleOutlined style={{ float: 'left', height: '100%', width: '100%' }} />
                                    </span>
                                    Count on 24/7 support
                                </h6>
                                <p className='left-content'>
                                    Our round-the-clock support team is available to help anytime, anywhere.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='bp-right'>
                        <div className='video'>
                            <VideoPlayerWithImage onClick={openVideoModal}/>\
                            {showVideoModel && <VideoModel onClose={closeVideoModal} />}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default TheBestPart