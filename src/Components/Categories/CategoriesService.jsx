import React from 'react'
import { NavLink } from 'react-router-dom'
import { popular } from '../../Assets/Data/cards';

const CategoriesService = ({ card }) => {
    // console.log(card);
    return (
        <>
            <div className='slide'>
                <a href={card.link} className='slide-link'>
                    <img className='p-img' src={card.img} alt={card.title} />
                    <span className='p-title'>{card.title}</span>
                    <span className='p-arrow'>
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg>
                    </span>
                </a>
            </div>
        </>
    );
};

export default CategoriesService;