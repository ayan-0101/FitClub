import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import { Link } from 'react-scroll'
const Plans = () => {
    return (
        <div className='plans-container' id='plans'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>

            <div className='program-header'>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            {/* plans card */}
            <div className='plans'>
                {plansData.map((plans, i) => (

                    <div className='plan' key={i}>
                        {plans.icon}
                        <span>{plans.name}</span>
                        <span> Rs. {plans.price} only</span>

                        <div className='features'>
                            {plans.features.map((feature, i) => (
                                <div className='feature'>
                                    <img src={whiteTick} alt='' />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div><span>See more benefits -{'>'}  </span></div>
                        <Link to='join'
                            spy={true}
                            smooth={true}>
                            <button className='btn'>Join Now</button>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Plans
