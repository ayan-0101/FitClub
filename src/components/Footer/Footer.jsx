import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets//instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className='footer'>

                <div className='social-links'>
                    <a href='https://github.com/' target='_blank' rel="noopener noreferrer"><img src={Github} alt='' /></a>
                    <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><img src={Instagram} alt='' /></a>
                    <a href='https://www.linkedin.com/home/' target='_blank' rel="noopener noreferrer"><img src={LinkedIn} alt='' /></a>

                </div>

                <div className='logo-f'>
                    <Link to='hero'
                        spy={true}
                        smooth={true}>
                        <img src={Logo} alt='' />
                    </Link>

                </div>
            </div>
            <div className='blur blur-f-1'></div>
            <div className='blur blur-f-2'></div>

        </div>
    )
}

export default Footer
