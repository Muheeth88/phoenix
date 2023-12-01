import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import {Button} from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { mens_kurta } from '../../../Data/Men/men_kurta';

const HomeSectionCarousel = ({data, sectionName}) => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => {
      setActiveIndex((activeIndex) => activeIndex - 1)
      console.log(activeIndex)
    }
    const slideNext = () => {
      console.log("Clickedddddddddd")
      setActiveIndex((activeIndex) => activeIndex + 1)
      console.log(activeIndex)
    } 
    const syncActiveIndex = ({item}) => setActiveIndex(item)

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>)
  return (
    <div className='border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
        <div className='relative border'>
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
        { <Button onClick={slidePrev} className='z-50' variant='contained' sx={{position:"absolute", top: "8rem", left:"0rem", transform: "translateX(-50%) rotate(90deg)",  bgcolor:"white"}} aria-label='next'> <KeyboardArrowDownIcon sx={{color:"black"}}/> </Button>}
        { <Button onClick={slideNext} className='z-50' variant='contained' sx={{position:"absolute", top: "8rem", right:"0rem", transform: "translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label='next'> <KeyboardArrowUpIcon sx={{color:"black"}}/> </Button>}
        </div>
    </div>
  )
}

export default HomeSectionCarousel