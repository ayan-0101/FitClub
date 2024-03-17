import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion'
const Testimonials = () => {

    const transition = { typeof: 'spring', duration: 2 }
    const [isSelected, setIsSelected] = useState(0);
    const tLength = testimonialsData.length

    return (
        <div>
            <div className='testimonials'>
                <div className='left-t'>
                    <span>Testimonials</span>
                    <span className='stroke-text'>What They</span>
                    <span>say about us</span>
                    <motion.span
                     key={isSelected}
                     initial={{ opacity:'0',x:-100 }}
                     animate={{ opacity:'1',x:0 }}
                     exit={{ opacity:'0',x:100 }}
                     transition={{...transition}}
                    >{testimonialsData[isSelected].review}</motion.span>

                    <span>
                        <span style={{ color: 'var(--orange)' }}>
                            {testimonialsData[isSelected].name}
                        </span>{" "}
                        - {testimonialsData[isSelected].status}
                    </span>
                </div>
                <div className='right-t'>
                    <motion.div
                     initial={{ opacity:'0',x:-100 }}
                     transition={{...transition,duration:1 }}
                     whileInView={{opacity:'1',x:'0' }}
                    />
                    <motion.div
                      initial={{ opacity:'0',x:100 }}
                      transition={{...transition,duration:1 }}
                      whileInView={{opacity:'1',x:'0' }}
                    />
                    <motion.img 
                    key={isSelected}
                    initial={{ opacity:'0',x:100 }}
                    animate={{ opacity:'1',x:0 }}
                    exit={{ opacity:'0',x:-100 }}
                    transition={{...transition}}
                    src={testimonialsData[isSelected].image} alt='' />
                    <div className='arrow'>
                        <img
                            onClick={() => {
                                isSelected === 0
                                    ? setIsSelected(tLength - 1)
                                    : setIsSelected((prev) => prev - 1)
                            }}
                            src={leftArrow} alt='' />


                        <img
                            onClick={() => {
                                isSelected === tLength - 1
                                    ? setIsSelected(0)
                                    : setIsSelected((prev) => prev + 1)
                            }}
                            src={rightArrow} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
