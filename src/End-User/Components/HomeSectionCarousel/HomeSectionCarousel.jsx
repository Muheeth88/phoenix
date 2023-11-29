import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import {Button} from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const [activeIndex, setActiveIndex] = useState(0)

    const slidePrev = () => setActiveIndex(activeIndex-1)
    const slideNext = () => setActiveIndex(activeIndex+1)
    const syncActiveIndex = ({item}) => setActiveIndex(item)

    const items = [1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard/>)
  return (
    <div className='border'>
        <div className='relative border'>
            <AliceCarousel
            infinite
            disableDotsControls
            disableButtonsControls
            items={items}
            responsive={responsive}
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
            />


        { activeIndex !== items.length-5 && <Button onClick={slideNext} className='z-50' variant='contained' sx={{position:"absolute", top: "8rem", right:"0rem", transform: "translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label='next'> <KeyboardArrowUpIcon sx={{color:"black"}}/> </Button>}
        { activeIndex !== items.length-5 && <Button onClick={slidePrev} className='z-50' variant='contained' sx={{position:"absolute", top: "8rem", left:"0rem", transform: "translateX(-50%) rotate(90deg)",  bgcolor:"white"}} aria-label='next'> <KeyboardArrowDownIcon sx={{color:"black"}}/> </Button>}
        </div>
    </div>
  )
}

export default HomeSectionCarousel