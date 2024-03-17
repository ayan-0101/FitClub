import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nb from'../../assets/nb.png';
import adidas from'../../assets/adidas.png';
import nike from'../../assets/nike.png';

const Reasons = () => {
    return (
        <div className='reasons' id='reasons'>
            <div className='left-r'>
                <img src={image1} alt='' />
                <img src={image2} alt='' />
                <img src={image3} alt='' />
                <img src={image4} alt='' />
            </div>

            <div className='right-r'>
                <span className='someReason'>Some reasons to choose us </span>

                <div>
                    <span className='stroke-text'>Why</span>
                    <span>Choose us</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt='' />
                        <span>over 140+ expert coaching</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>reliable partners</span>
                    </div>
                </div>

                <span className='partner'>Our Partners </span>
                
                <div className='partner-img'>
                    <img src={nb} alt='' />
                    <img src={adidas} alt='' />
                    <img src={nike} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Reasons
