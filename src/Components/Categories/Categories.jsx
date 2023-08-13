import React, { useEffect, useState } from 'react'
import './Categories.scss'
import CategoryVideo from './CategoryVideo';
import CategoriesVideoModel from './CategoriesVideoModel';
import Slider from 'infinite-react-carousel';
import { popular } from '../../Assets/Data/cards';
import CategoriesService from './CategoriesService';
import { getWMenuByWId } from '../../Redux/slices/wSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { wService } from '../../Services/wService';

const Categories = () => {
  const [showVideoModel, setShowVideoModel] = useState(false);
  const [selectedPopular, setSelectedPopular] = useState(null);

  const dispatch = useDispatch();
  const categoryData = useSelector(state => state.works.ws);
  const { id } = useParams();

  const openVideoModal = () => {
    setShowVideoModel(true);
  };

  const closeVideoModal = () => {
    setShowVideoModel(false);
  };

  const [wDData, setWDData] = useState([]);
  useEffect(() => {
    // console.log(id)
    async function fetchWDData() {
      try {
        const response = await wService.getWMenuByWId(id);
        const data = response.data.content;
        setWDData(data);
        // console.log(data)
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    }

    fetchWDData();
  }, [dispatch, id]);

  return (
    <>
      <div className='categories-container'>
        <div className='categories-banner-container'>
          <div className='categories-banner'>
            <div className='banner'>
              <div className='banner-content'>
                {wDData.map((item) => (
                  <h1 class="title" key={item.id}>
                    {item.tenLoaiCongViec}
                  </h1>
                ))}

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
              {wDData.map((item) => (
                  <h2 class="text-display" key={item.id}>
                    Most popular in {item.tenLoaiCongViec}
                  </h2>
                ))}
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

        <div className='ex-title'>
          {wDData.map((item) => (
            <h2 className="etitle">Explore {item.tenLoaiCongViec}</h2>
          ))}
        </div>

        <div className='explore-container'>
          <div className='bucket-container'>
            {wDData.map((item) => (
              <div key={item.id} className='buck-wrapper'>
                {item.dsNhomChiTietLoai.map((nestedItem) => (
                  <article key={nestedItem.id} className='article-wrapper'>
                    <div className='article-title'>
                      <div className='title-container'>
                        <div className='title-top'>
                          <img className='img-top' src={nestedItem.hinhAnh} alt='' loading='lazy' style={{width: '326px', height: '194px'}}/>
                          <h3 className='title-h'>{nestedItem.tenNhom}</h3>
                        </div>
                      </div>
                    </div>
                    <div className='article-content'>
                      <div className='item-content'>
                        {nestedItem.dsChiTietLoai.map((detail) => (
                          <div className='item-wrapper' key={detail.id}>
                            <a className='item-name' href={`/ListWork/${detail.id}`}>
                              <div className='item-name-inner-link'>
                                <span>
                                  {detail.tenChiTiet}
                                </span>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
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