import React from 'react'
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='py-20 space-y-10 px-5 lg:px-10' >
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage