import React from 'react'
import './GuildToHelp.scss'

const GuildToHelp = () => {
  return (
    <div className='g-container'>
      <div className='guild'>
        <h2>Guides to help you grow</h2>
        <div className='g-grid'>
          <a href='https://www.fiverr.com/resources/guides/business/start-online-business-and-work-from-home' target='_blank'>
            <picture>
              <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png' />
            </picture>
            <h6>Start an online business and work from home</h6>
            <p>A complete guide to starting a small business online</p>
          </a>
          <a href='https://www.fiverr.com/resources/guides/digital-marketing/what-is-digital-marketing' target='_blank'>
            <picture>
              <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png' />
            </picture>
            <h6>Digital marketing made easy</h6>
            <p>A practical guide to understand what is digital marketing</p>
          </a>
          <a href='https://www.fiverr.com/resources/guides/graphic-design/how-to-create-business-logo' target='_blank'>
            <picture>
              <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png' />
            </picture>
            <h6>Create a logo for your business</h6>
            <p>A step-by-step guide to create a memorable business logo</p>
          </a>
        </div>
        <a href='https://www.fiverr.com/resources/guides' target='_blank' className='see-more'>
          See more
          <span className="nFghBOe chevron-right" aria-hidden="true" style={{ width: 10, height: 10 }}><svg width={8} height={16} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" /></svg></span>
        </a>
      </div>
      <div className='suddenly'>
        <picture>
          <div>
            <source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608129/bg-signup-1400-x2.png 2x" />
            <source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608114/bg-signup-1160-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608134/bg-signup-1160-x2.png 2x" />
            <img alt="The talent you need" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" loading="lazy" />
          </div>
        </picture>
        <div className='suddenly-txt'>
          <h2 className='g-title'>
            <span>
              Suddenly it's all so 
            </span>
             <i> doable</i>.
          </h2>
          <a href='https://www.fiverr.com/join?source=hplo_get_started' className='g-btn'>
          Join Fiverr
          </a>
        </div>
      </div>
    </div>
  )
}

export default GuildToHelp