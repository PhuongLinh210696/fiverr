import React from 'react'
import Feature from '../../Components/Feature/Feature'
import PopularServices from '../../Components/PopularServices/PopularServices'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'

const HomePage = () => {
  return (
    <div>
        <Feature/>
        <TrustedBy/>
        <PopularServices/>
    </div>
  )
}

export default HomePage