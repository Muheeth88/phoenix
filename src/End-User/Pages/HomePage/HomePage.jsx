import React from 'react'
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/men_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='py-20 space-y-10 px-5 lg:px-10' >
            <HomeSectionCarousel sectionName="Mens Kurta" data={mens_kurta}/>
            <HomeSectionCarousel sectionName="Mens Shoes" data={mens_kurta}/>
            <HomeSectionCarousel sectionName="Mens Shirt" data={mens_kurta}/>
            <HomeSectionCarousel sectionName="Womens Saree" data={mens_kurta}/>
            <HomeSectionCarousel sectionName="Womens Dress" data={mens_kurta}/>
        </div>
    </div>
  )
}

export default HomePage