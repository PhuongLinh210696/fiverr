import React, { useEffect, useState } from 'react'
import './ListWork.scss'
import CategoryVideo from '../Categories/CategoryVideo';
import { unstable_HistoryRouter, useParams } from 'react-router-dom';
import { wService } from '../../Services/wService';

const ListWork = () => {
    const [showVideoModel, setShowVideoModel] = useState(false);
    const { id } = useParams();
    const [similarWorkList, setSimilarWorkList] = useState([]);

    const openVideoModal = () => {
        setShowVideoModel(true);
    };

    const closeVideoModal = () => {
        setShowVideoModel(false);
    };


    useEffect(() => {
        async function fetchSimilarWorkList() {
            try {
                const response = await wService.getWMenuByWDetail(id);
                const data = response.data.content;
                setSimilarWorkList(data);
                // console.log(data)
                // console.log(similarWorkList.length > 0 ? similarWorkList[0].tenChiTietLoai : '')
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        }
        fetchSimilarWorkList();
    }, [id]);

    return (
        <>
            <div className='list-work-top'>
                <div className='top-wrapper'>
                    <header className='wrapper-header'>
                        <div className='title-wrapper'>
                            <div className='list-header-content'>
                                <ul className='breadcrumb'>
                                    <li>
                                        <a className='breadcrumb-home' href='/'>
                                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/home-breadcrumb.2ba1681.svg" alt="Fiverr" />
                                        </a>
                                    </li>
                                    <li>
                                        <span class="divider">/</span>
                                        <a href="">{similarWorkList.length > 0 ? similarWorkList[0].tenChiTietLoai : ''}</a>
                                    </li>
                                </ul>
                                <h1>{similarWorkList.length > 0 ? similarWorkList[0].tenChiTietLoai : ''}</h1>
                                <div className='explain-video'>
                                    <p class="sc-subtitle">Stand out from the crowd with a logo that fits your brand personality.</p>
                                    <span class="separator"> | </span>
                                    <button className='explain-play' onClick={openVideoModal}>
                                        <span className="play-icon" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fillRule="evenodd" clipRule="evenodd" d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z" /></svg></span>
                                        How Fiverr Works
                                    </button>
                                </div>

                            </div>
                        </div>
                    </header>
                </div>
            </div>

            <div className='list-work-bottom'>
                <div className='top-bar'>
                    <div className='effect'>
                        <div className='float-top'>
                            <div className='top-filter'>
                                <div className='filter-menu'>
                                    <div className='menu-title'>
                                        Service options
                                        <span className="chevron-icon-down" style={{ width: 12, height: 12 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span>
                                    </div>
                                </div>
                                <div className='filter-menu'>
                                    <div className='menu-title'>
                                        Seller details
                                        <span className="chevron-icon-down" style={{ width: 12, height: 12 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span>
                                    </div>
                                </div>
                                <div className='filter-menu'>
                                    <div className='menu-title'>
                                        Buget
                                        <span className="chevron-icon-down" style={{ width: 12, height: 12 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span>
                                    </div>
                                </div>
                                <div className='filter-menu'>
                                    <div className='menu-title'>
                                        Delivery time
                                        <span className="chevron-icon-down" style={{ width: 12, height: 12 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span>
                                    </div>
                                </div>
                            </div>
                            <div className='togglers-wrapper'>
                                <div className='tool-tip'>
                                    <span className='tool'>
                                        <div className='toggle'>
                                            <label className='toggle-label'>
                                                <input type='checkbox' value={false} />
                                                <span className='toggle-btn'>
                                                    <span className='toggle-on'></span>
                                                </span>
                                            </label>
                                            Pro services
                                        </div>
                                    </span>
                                </div>
                                <div className='tool-tip'>
                                    <span className='tool'>
                                        <div className='toggle'>
                                            <label className='toggle-label'>
                                                <input type='checkbox' value={false} />
                                                <span className='toggle-btn'>
                                                    <span className='toggle-on'></span>
                                                </span>
                                            </label>
                                            Local sellers
                                        </div>
                                    </span>
                                </div>
                                <div className='tool-tip'>
                                    <span className='tool'>
                                        <div className='toggle'>
                                            <label className='toggle-label'>
                                                <input type='checkbox' value={false} />
                                                <span className='toggle-btn'>
                                                    <span className='toggle-on'></span>
                                                </span>
                                            </label>
                                            Online sellers
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='layout-row'>
                    <div className='flex-col'>
                        <div className='flex-item'>
                            <div class="number-of-results">37,667 services available</div>
                        </div>
                    </div>
                    <div className='sort-by-wraper'>
                        <span class="pre-title">Sort by:</span>
                        <div className='floating-menu'>
                            <div className='menu-title'>
                                Best selling
                                <span className="chevron-icon-down" style={{ width: 12, height: 12 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='list-work-container'>
                    <div className='list-work-content'>
                        <div className='content'>
                            {similarWorkList.map((item) => (
                                <div className='grid-view' key={item.id}>
                                <div className='grid-card-layout'>
                                    <div className='wrapper'>
                                        <div className='card'>
                                            <a href={`/DetailWork/${item.congViec.id}`} target='_blank' className='media'>
                                                <div className='slider'>
                                                    <div className='img-slider'>
                                                        <div className='slide-item'>
                                                            <img src={item.congViec.hinhAnh} className='img-item'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className='item-title'>
                                                <div className='avatar'>
                                                    <div className='avatar-text'>
                                                        <div className='avatar-img'>
                                                            <figure>
                                                                <figcaption>
                                                                </figcaption>
                                                                <img className='a-img' src={item.avatar} />
                                                            </figure>
                                                        </div>
                                                        <span className='avatar-name'>
                                                            <a href={`/UserProfileWork/${item.tenNguoiTao}`} target='_blank' className='a-name'>
                                                                <span>{item.tenNguoiTao}</span>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className='item-content' href={`/DetailWork/${item.congViec.id}`} target='_blank'>
                                                <h3 className='i-text' title={item.congViec.tenCongViec}>
                                                    {item.congViec.tenCongViec}
                                                </h3>
                                            </a>
                                            <div className='star-container'>
                                                <div className='rating'>
                                                    <div className='stars'>
                                                        <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                    </div>
                                                    <b class="rating-score">{item.congViec.saoCongViec}</b>
                                                    <span className='rating-count'>
                                                        (
                                                        <span className='rating-count-number'>{item.congViec.danhGia}</span>
                                                        )
                                                    </span>
                                                </div>
                                            </div>
                                            <a href={`/DetailWork/${item.congViec.id}`} target='_blank' className='item-price'>
                                                <span className='price'>
                                                    From ${item.congViec.giaTien}
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
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

export default ListWork