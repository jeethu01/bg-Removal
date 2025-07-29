import React, { useState } from 'react'
import { assets } from '../assets/assets';

const BgSlider = () => {
  const [sliderPosition,setSliderPosition] = useState(50)
  const handleSliderChange = (e)=>{
setSliderPosition(e.target.value)
  }
  return (
    <div className='pb-10 md:py-20 mx-2'>
{/*---------Title------*/}
      <h2 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background with High <br /> Quality and Accuracy</h2>
      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        {/*Image with background */}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" /> {/*in the style=----- is used to take the % of size of the image we needed as we define in the useState(50) */}
        {/*Foreground image */}
        <img className='w-full h-full top-0 left-0 absolute' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />
        {/*----Slider */}
        <input className='top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
      </div>
    </div>
  )
}

export default BgSlider
