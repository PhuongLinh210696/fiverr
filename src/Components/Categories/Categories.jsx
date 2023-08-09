import React, { useState } from 'react'
import './Categories.scss'
import CategoryVideo from './CategoryVideo';
import CategoriesVideoModel from './CategoriesVideoModel';
import Slider from 'infinite-react-carousel';
import { popular } from '../../Assets/Data/cards';
import CategoriesService from './CategoriesService';

const Categories = () => {
  const [showVideoModel, setShowVideoModel] = useState(false);
  const [selectedPopular, setSelectedPopular] = useState(null);

  const openVideoModal = () => {
    setShowVideoModel(true);
  };

  const closeVideoModal = () => {
    setShowVideoModel(false);
  };


  return (
    <>
      <div className='categories-container'>
        <div className='categories-banner-container'>
          <div className='categories-banner'>
            <div className='banner'>
              <div className='banner-content'>
                <h1 class="title">Graphics &amp; Design</h1>
                <p class="subtitle tbody-5">Designs to make you stand out.</p>
                <div className='video-banner'>
                  <CategoriesVideoModel onClick={openVideoModal} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='banner-selection'>
          <div className='wrapper'>
            <div className='wrapper-content'>
              <div class="most-popular-header">
                <h2 class="text-display">Most popular in Graphics Design</h2>
              </div>
              <div className='button-wrapper'>
              </div>
            </div>
            <div className='slides-list'>
              <Slider slidesPerRow={5}>
                {popular.map((item, index) => (
                  <div className='slide-track' key={index}>
                    <CategoriesService card={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className='explore-container'>
          <div className='bucket-container'>
            <h2 class="buck-title">Explore Graphics Design</h2>
            <div className='buck-wrapper'>

              <article className='article-wrapper'>
                {/* top */}
                <div className='article-title'>
                  <div className='title-container'>
                    <div className='title-top'>
                      <img className='img-top' src='' alt='' loading='lazy'/>
                      <h3 className='title-top'>Graphic Design</h3>
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div className='article-content'>
                  <div className='item-content'>
                    <div className='item-wrapper'>
                      <a className='item-name' href=''>
                        <div className='item-name-inner-link'>
                          <span>
                            Test
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>

      </div>
      <div>
        {showVideoModel && <CategoryVideo onClose={closeVideoModal} />}
      </div>
    </>
  )
}

export default Categories