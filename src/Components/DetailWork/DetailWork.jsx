import React, { useEffect, useState } from 'react'
import './DetailWork.scss'
import { useParams } from 'react-router-dom'
import { wService } from '../../Services/wService';
import { rService } from '../../Services/rService';

const DetailWork = () => {
    const { id } = useParams();
    const [detailWork, setDetailWork] = useState([]);
    const [reviewWork, setReviewWork] = useState([]);

    useEffect(() => {
        async function fetchDetailWork() {
            try {
                const res = await wService.getWMenuDById(id);
                const data = res.data.content;
                setDetailWork(data);
                // console.log(data);
            } catch (err) {
                // console.error('Error fetching data', err);
            }
        }
        fetchDetailWork();
    }, [id]);

    useEffect(() => {
        async function fetchReviewWork() {
            try {
                const res2 = await rService.getRByWId(id);
                const data2 = res2.data.content;
                setReviewWork(data2);
                // console.log(data2);
            } catch (err) {
                // console.error('Error fetching data', err);
            }
        }
        fetchReviewWork();
    }, [id]);

    return (
        <>
            <div className='detail-work'>
                <div className='bg-detail'>
                    {detailWork.map((item) => (
                        <div className='detail-page' key={item.id}>
                            <div className='sticky-content'>
                                <div className='inner-wrapper'>
                                    <aside className='side-content'>
                                        <div className='like-share-container'>
                                            <div className='like-share'>
                                                <div className='like-wrapper'>
                                                    <div className='heart-likes'>
                                                        <div className='like-btn'>
                                                            <span className='likes'>
                                                                <button className='btn'>
                                                                    <span className="heart" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z" /></svg></span>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className='number-likes'>
                                                        3,732
                                                    </span>
                                                </div>
                                                <span className='share'>
                                                    <button className='share-btn'>
                                                        <svg width={16} height={16} viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M11 10c-.707 0-1.356.244-1.868.653L5.929 8.651a3.017 3.017 0 0 0 0-1.302l3.203-2.002a3 3 0 1 0-1.06-1.696L4.867 5.653a3 3 0 1 0 0 4.694l3.203 2.002A3 3 0 1 0 11 10Z" /></svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='package-tabs'>
                                            <input id='pt1' type='radio'>
                                            </input>
                                            <input id='pt2' type='radio'>
                                            </input>
                                            <input id='pt3' type='radio'>
                                            </input>
                                            <div className='nav-container'>
                                                <label for='pt1' className='lbl'>Basic</label>
                                                <label for='pt2' className='lbl' aria-selected='true'>Standard</label>
                                                <label for='pt3' className='lbl'>Premium</label>
                                            </div>
                                            <div className='nav-content'>
                                                <div className='content-detail'>
                                                    <header className='header-deatil'>
                                                        <h3>
                                                            <div className='price-wrapper'>
                                                                <span class="price">${item.congViec.giaTien}</span>
                                                                <div className='p-item'>
                                                                    <span>Save up to 20% with <span class="subs">Subscribe to Save</span>
                                                                    </span>
                                                                    <div className='p-icon'>
                                                                        <span className='subs-play'>
                                                                            <span className="plays" aria-hidden="true" style={{ width: 12, height: 12 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.66669 6.2222C6.66669 5.99407 6.74244 5.63209 6.94361 5.35269C7.11215 5.11861 7.40085 4.88886 8.00003 4.88886C8.73426 4.88886 9.11567 5.27671 9.24475 5.66556C9.38071 6.07511 9.26479 6.53293 8.84029 6.81593C8.13871 7.28365 7.62193 7.73677 7.34968 8.37204C7.10944 8.93259 7.11027 9.54684 7.11105 10.1244L7.11114 10.2222H8.88892C8.88892 9.49449 8.90421 9.25784 8.98371 9.07235C9.04479 8.92984 9.19468 8.71629 9.82643 8.29513C10.9709 7.53217 11.2994 6.21221 10.932 5.10547C10.5577 3.97803 9.48801 3.11108 8.00003 3.11108C6.82143 3.11108 5.99902 3.62208 5.50089 4.31392C5.03539 4.96045 4.88892 5.70958 4.88892 6.2222H6.66669ZM8.88886 12.8889V11.1111H7.11108V12.8889H8.88886Z" /></svg></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </h3>
                                                        <p className='d-content'>
                                                            <b>INITIAL PACKAGE</b> Starter logo concepts in 2000X2000px, 300dpi +  NO mascots & complex design
                                                        </p>
                                                    </header>
                                                    <article>
                                                        <div className='additional-info'>
                                                            <div className='delivery-wrapper'>
                                                                <span className="delivery-icon" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" /><path d="M9 4H7v5h5V7H9V4z" /></svg></span>
                                                                <b class="delivery">3 Days Delivery</b>
                                                            </div>
                                                            <div className='revision-wrapper'>
                                                                <span className="revisions-icon" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" /><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" /></svg></span>
                                                                <b class="revisions">1 Revision</b>
                                                            </div>
                                                        </div>
                                                        <ul className='features'>
                                                            <li className='f-item'>
                                                                {/* <span className="f-icon" aria-hidden="true" style={{ width: 16, height: 16 }}><svg width={16} height={16} viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z" /></svg></span> */}
                                                                {item.congViec.moTaNgan}
                                                            </li>
                                                        </ul>
                                                    </article>
                                                </div>
                                                <footer className='payment'>
                                                    <button className='pay' type='button'>
                                                        Continue
                                                        <span className="rf" aria-hidden="true" style={{ width: 16, height: 16, fill: 'white' }}><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" /></svg></span>
                                                    </button>
                                                    <button className='compare'>Compare packages</button>
                                                </footer>
                                            </div>
                                        </div>
                                        <div className='contact-seller'>
                                            <div className='contact-seller-wrapper'>
                                                <button class="btn-contact-seller">Contact me</button>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>


                            <div className='main'>

                                <div className='main-breadcrumb'>
                                    <div className='m-breadcrumb'>
                                        <a className='home-b' href='/'>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M12.773 14.5H3.227a.692.692 0 0 1-.482-.194.652.652 0 0 1-.2-.468V7.884H.5l7.041-6.212a.694.694 0 0 1 .918 0L15.5 7.884h-2.046v5.954a.652.652 0 0 1-.2.468.692.692 0 0 1-.481.194Zm-4.091-1.323h3.409V6.664L8 3.056 3.91 6.664v6.513h3.408v-3.97h1.364v3.97Z" /></svg>
                                        </a>
                                        <p className='b-dash'>/</p>
                                        <a className='home-b' href={`/ListWork/${item.congViec.maChiTietLoaiCongViec}`}>{item.tenChiTietLoai}</a>
                                        <p className='b-dash'>/</p>
                                        <a className='home-b' href={`/DetailWork/${item.id}`}>{item.tenNhomChiTietLoai}</a>
                                    </div>
                                </div>
                                <span></span>
                                <div className='gig-overview'>
                                    <h1 class="text-display-gig">{item.congViec.tenCongViec}</h1>
                                    <div className='seller-overview'>
                                        <div className='overview'>
                                            <div className='overview-wrapper'>
                                                <div className='overview-avatar'>
                                                    <figure className='a-fig'>
                                                        <figcaption className='figc'></figcaption>
                                                        <img src={item.avatar} className='seller-a' />
                                                    </figure>
                                                </div>
                                                <div className='overview-info'>
                                                    <div className='info-top'>
                                                        <a tabindex="0" role="button" aria-label="Scroll to about the seller" class="seller-n" href={`/UserProfileWork/${item.tenNguoiTao}`}>{item.tenNguoiTao}</a>
                                                    </div>
                                                    <div className='info-bottom'>
                                                        <div className='tover-rank'>
                                                            <div className='s'>
                                                                <span className="o-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                            </div>
                                                            <b className='rate-score'>{item.congViec.saoCongViec}</b>
                                                            <span className='count'>
                                                                (
                                                                <span className='count-n'>{item.congViec.danhGia}</span>
                                                                )
                                                            </span>
                                                        </div>
                                                        <div className="di">
                                                            <div className="div" />
                                                        </div>
                                                        <div class="ord">11 Orders in Queue</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span></span>
                                <section className='gig-galery'>
                                    <div className='galery'>
                                        <div className='galery-wrapper'>
                                            <div className='galery-component'>
                                                <div className='current'>
                                                    <div className='image'>
                                                        <figure className='thumbnail'>
                                                            <img src={item.congViec.hinhAnh} />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className='gig-description'>
                                    <header>
                                        <h2 class="section-title">About this gig</h2>
                                    </header>
                                    <div className='description-wrapper'>
                                        <div className='description-content'>
                                            <p>
                                                {item.congViec.moTa}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className='metadata'>
                                        <li class="metadata-attribute">
                                            <p>Logo style</p>
                                            <ul>
                                                <li>Minimalist</li>
                                            </ul>
                                        </li>
                                        <li class="metadata-attribute">
                                            <p>File format</p>
                                            <ul>
                                                <li>AI</li>
                                                <li>JPG</li>
                                                <li>PDF</li>
                                                <li>PNG</li>
                                                <li>PSD</li>
                                                <li>EPS</li>
                                                <li>SVG</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <h2 className='about-the-seller'>
                                    <span>About the seller</span>
                                </h2>
                                <div className='profile-card'>
                                    <div className='seller-card'>
                                        <div className='seller-top'>
                                            <div className='seller-avatar'>
                                                <div className='user-profile'>
                                                    <label className='pics'>
                                                        <img src={item.avatar} className='pic-img' />
                                                        <a href='https://www.fiverr.com/levels' className='badge'></a>
                                                    </label>
                                                </div>
                                                <div className='seller-info'>
                                                    <div className='seller-name'>
                                                        <div className='name-item'>
                                                            <a tabindex="0" role="button" aria-label="Scroll to about the seller" class="name" href={`/UserProfileWork/${item.tenNguoiTao}`}>{item.tenNguoiTao}</a>
                                                        </div>
                                                        <div className='space'></div>
                                                    </div>
                                                    <p className='seller-sums'>The best guy for all your design needs!!</p>
                                                    <div className='seller-rate'>
                                                        <div className='rate-rating'>
                                                            <div className='stars'>
                                                                <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                            </div>
                                                            <b className="rating-score">{item.congViec.saoCongViec}</b>
                                                            <span className="ratings-count">
                                                                (
                                                                <span className="rating-count-number">{item.congViec.danhGia}</span>
                                                                )
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className='contact-me-btn'>Contact me</button>
                                        </div>
                                        <div className='seller-bottom'>
                                            <ul className='user-stats'>
                                                <li>From<strong>Pakistan</strong></li>
                                                <li>Member since<strong>Nov 2019</strong></li>
                                                <li>Avg. response time<strong>2 hours</strong></li>
                                                <li>Last delivery<strong>about 4 hours</strong></li>
                                                <li>
                                                    <div>
                                                        <p>Languages</p>
                                                        <div class="languages-tooltip">
                                                            <span class="lang">
                                                                <strong data-testid="languages-to-show" class="languages-tooltips" delay="120" content="[object Object]" position="top" boxclassname="n8k5Ydl" boxcontentclassname="xZqc_Ec">English</strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <article className='seller-desc'>
                                                <div class="inner">{item.congViec.moTa}</div>
                                            </article>
                                        </div>
                                        <button class="read-more">+ See More</button>
                                    </div>
                                </div>

                                <div className='faq'>
                                    <h2 className="section-title">
                                        <span className="faq-collapser" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg>
                                        </span>
                                        FAQ
                                    </h2>
                                    <div className='faq-group'>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">What do I need to get started?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">Which package should I Purchase?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">What is Vector/Source files and will I use them?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">What is Social media kit?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">What is a 3D Mock-up?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">Looking for a HAND-DRAWN CHARACTER DESIGN?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">How many Logos will I get??</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">What is a Revision?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='faq-item'>
                                            <div className='faq-item-wrapper'>
                                                <div className="faq-title">
                                                    <p className="question">Why do I need to pay for COPYRIGHT DOCUMENT?</p>
                                                </div>
                                                <div className='chevron'>
                                                    <span className="c-i" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>

                                <div className='m-b-0'></div>

                                <div className='gig-review'>
                                    <div className="co-text">Reviews</div>
                                    <div className='review-packages'>
                                        <header className='review-header'>
                                            <div className='details'>
                                                <h2 className='txt-dis'>
                                                    <span className='ful-txt'>
                                                        <span>
                                                            <span>
                                                                2,419
                                                            </span>
                                                            reviews for this Gig
                                                        </span>
                                                        <div className='orca-rate'>
                                                            <div className='stars'>
                                                                <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                            </div>
                                                            <b className="rating-score">5</b>
                                                        </div>
                                                    </span>

                                                </h2>
                                            </div>
                                        </header>
                                        <span>
                                            <div className='breakdown-wrapper'>
                                                <div className='break-left'>
                                                    <table className='stars-counter'>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span className='stars-filter-wrapper'>
                                                                        <button className="stars-filter" data-impression-collected="true">5 Stars</button>
                                                                    </span>
                                                                </td>
                                                                <td className='progress-bar-container'>
                                                                    <div className="star-bar">
                                                                        <div className="bar">
                                                                            <span className="star-progress-shape" style={{ width: '97.12643678160919%' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className='star-num'>(2,370)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className='stars-filter-wrapper'>
                                                                        <button className="stars-filter" data-impression-collected="true">4 Stars</button>
                                                                    </span>
                                                                </td>
                                                                <td className='progress-bar-container'>
                                                                    <div className="star-bar">
                                                                        <div className="bar">
                                                                            <span className="star-progress-shape" style={{ width: '1.5708970649028524%' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className='star-num'>(38)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className='stars-filter-wrapper'>
                                                                        <button className="stars-filter" data-impression-collected="true">3 Stars</button>
                                                                    </span>
                                                                </td>
                                                                <td className='progress-bar-container'>
                                                                    <div className="star-bar">
                                                                        <div className="bar">
                                                                            <span className="star-progress-shape" style={{ width: '0.24803637866887143%' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className='star-num'>(6)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className='stars-filter-wrapper'>
                                                                        <button className="stars-filter" data-impression-collected="true">2 Stars</button>
                                                                    </span>
                                                                </td>
                                                                <td className='progress-bar-container'>
                                                                    <div className="star-bar">
                                                                        <div className="bar">
                                                                            <span className="star-progress-shape" style={{ width: '0.0413393964448119%' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className='star-num'>(1)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className='stars-filter-wrapper'>
                                                                        <button className="stars-filter" data-impression-collected="true">1 Stars</button>
                                                                    </span>
                                                                </td>
                                                                <td className='progress-bar-container'>
                                                                    <div className="star-bar">
                                                                        <div className="bar">
                                                                            <span className="star-progress-shape" style={{ width: '0.1653575857792476%' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className='star-num'>(4)</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='break-right'>
                                                    <div className='ranking'>
                                                        <h6 class="text-r">Rating Breakdown</h6>
                                                        <ul>
                                                            <li>
                                                                Seller communication level
                                                                <span>
                                                                    <div className='o-rate'>
                                                                        <div className='stars'>
                                                                            <span className="o-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                        </div>
                                                                        <b class="r-score">5</b>
                                                                    </div>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                Recommend to a friend
                                                                <span>
                                                                    <div className='o-rate'>
                                                                        <div className='stars'>
                                                                            <span className="o-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                        </div>
                                                                        <b class="r-score">5</b>
                                                                    </div>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                Service as described
                                                                <span>
                                                                    <div className='o-rate'>
                                                                        <div className='stars'>
                                                                            <span className="o-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                        </div>
                                                                        <b class="r-score">5</b>
                                                                    </div>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='filter-wrapper'>
                                                <div className='filter-list'>
                                                    <span className='search-box-filter-wrapper'>
                                                        <form className='search-box-filter'>
                                                            <div className='search-input'>
                                                                <div className='input'>
                                                                    <input type='search' className='search-box' placeholder='Search reviews' value maxLength={50} />
                                                                    <button className='search-icon'>
                                                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" /></svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </span>
                                                    <span className='filter-reviews-wrapper'>
                                                        <div className='filter-reviews'>
                                                            <h6 class="filter-dropdown-text">Sort By</h6>
                                                            <div className='filter-reviews-select'>
                                                                <span className='filter-reviews-select-content'>
                                                                    <div class="s-c">Most relevant</div>
                                                                    <span className="s-i" style={{ width: 11, height: 11 }} aria-hidden="true"><svg width={11} height={7} viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" /></svg></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <div className='toggle-filter'>
                                                        <label className='toggle-filter-label'>
                                                            <input type="checkbox" />
                                                            <span className="cb">
                                                                <span className="cb-i" style={{ width: 10, height: 10 }} aria-hidden="true"><svg width={11} height={9} viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" /></svg></span>
                                                            </span>
                                                            <label class="toggle-filter-text" for="worksample-filter">Delivery images (1,223)</label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        <div className='reviews-wrap'>
                                            <ul className='review-list'>
                                                <span className='review-item-component-wrapper'>
                                                    {reviewWork.map((i) => (
                                                        <li className='review-item-component' key={i.id}>
                                                            <div className='review-header-container'>
                                                                <div className='item-center'>
                                                                    <div className='user-profile'>
                                                                        <label className='profile-pic'>
                                                                            <div className='custom-profile-img'>
                                                                                <img src={i.avatar} className='profile-fig'>
                                                                                </img>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div className='user-name'>
                                                                        <div className='user-info'>
                                                                            <div className='user-profile-mobile'>
                                                                                <label className='profile-pict'>
                                                                                    <div className='custom-profile-img'>
                                                                                        <img src={i.avatar} className='profile-fig' />
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                            <div className='review-details'>
                                                                                <span className='username'>
                                                                                    <b>{i.tenNguoiBinhLuan}</b>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='review-sub-details'>
                                                                            <div className='country'>
                                                                                <img className='country-flag' src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fb-1f1f3.png' />
                                                                                <div class="country-name">Vietnam</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='r-detail'>
                                                                <div className='s-review'>
                                                                    <div className='orca-rating'>
                                                                        <div className='star-orca'>
                                                                            <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                            <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                            <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                            <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                            <span className="orca-star" style={{ width: 15, height: 15 }} aria-hidden="true"><svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" /></svg></span>
                                                                        </div>
                                                                        <b class="rating-score">{i.saoBinhLuan}</b>
                                                                    </div>
                                                                    <span className='divider'></span>
                                                                    <span className='time'>
                                                                        <time className='time-ago'>{i.ngayBinhLuan}</time>
                                                                    </span>
                                                                </div>
                                                                <div className='r-desc'>
                                                                    <p>{i.noiDung}</p>
                                                                </div>
                                                                <div className='r-footer'>
                                                                    <div className='helpful-footer'>
                                                                        <div className='helpful-thumb'>
                                                                            <div className='helpful-text'>
                                                                                Helpful?
                                                                            </div>
                                                                            <span className='thumb-icon-wrapper'>
                                                                                <span className='m-thumb'>
                                                                                    <div className='t-icon'>
                                                                                        <span className="thumbs-icon" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z" /></svg></span>
                                                                                        <span className='thumb-title'>Yes</span>
                                                                                    </div>
                                                                                </span>
                                                                                <span className='m-thumb'>
                                                                                    <div className='t-icon'>
                                                                                        <span className="thumbs-icon" style={{ width: 14, height: 14 }} aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg></span>
                                                                                        <span className='thumb-title'>No</span>
                                                                                    </div>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    {detailWork.map((item) => (
                                                                        <div className='helpful-respond' key={item.id}>
                                                                            <span className='review-seller-comment-wrapper'>
                                                                                <div className='seller-info'>
                                                                                    <div className='seller-img'>
                                                                                        <label className='seller-pic'>
                                                                                            <img className='seller-profile-pic' src={item.avatar} />
                                                                                        </label>
                                                                                    </div>
                                                                                    <span className='seller-name'>
                                                                                        {item.tenNguoiTao}
                                                                                    </span>
                                                                                </div>
                                                                                <div className='seller-respond'>
                                                                                    <div className='seller-respond-info'>
                                                                                        <p>
                                                                                            Wow, thank you very much for your kind words, I am glad that you liked my logo designs in exception to the others and I greatly appreciate your compliments too about me and my service. A complete pleasure to work with you. Have a Great Day !!!!
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </span>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DetailWork