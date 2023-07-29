import React from 'react'
import Feature from '../../Components/Feature/Feature'
import PopularServices from '../../Components/PopularServices/PopularServices'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import TheBestPart from '../../Components/TheBestPart/TheBestPart'
import YouNeedWeGot from '../../Components/YouNeedWeGot/YouNeedWeGot'
import Business from '../../Components/Business/Business'
import VideoLoop from '../../Components/VideoLoop/VideoLoop'

const HomePage = () => {
  return (
    <div>
        <Feature/>
        <TrustedBy/>
        <PopularServices/>
        <TheBestPart/>
        <YouNeedWeGot />
        <Business />
        <VideoLoop />
    </div>
  )
}

export default HomePage