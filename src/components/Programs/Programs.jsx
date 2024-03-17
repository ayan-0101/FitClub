import React from 'react'
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
import { Link } from 'react-scroll'
const Programs = () => {
    return (
        <div className='programs' id='programs'>
            {/* header */}
            <div className='program-header'>
                <span className='stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape your</span>
            </div>
            <div className='program-categories'>
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <Link
                            to='join'
                            spy={true}
                            smooth={true}
                        >
                            <div className='join-now'><span>Join Now</span> <img src={RightArrow} alt='' /></div>
                        </Link>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Programs
