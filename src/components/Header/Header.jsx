import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);     

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpened]);
  
  return (

    <div>
      <div className='header'>
        <img src={Logo} alt='Logo' className='logo' />

        {
          (menuOpened === false && mobile === true) ? (
            <div
              style={{
                backgroundColor: 'var(--appColor)',
                padding: '0.5rem',
                borderRadius: '5px'
              }}
              onClick={() => { setMenuOpened(true) }}

            >
              <img src={Bars} alt='' style={{ width: '1.5rem', height: '1.5rem' }} />
            </div>
          ) :
            <ul className='header-menu' ref={menuRef}>
              <li><Link
                onClick={() => { setMenuOpened(false) }}
                activeClass='active'
                to='hero'
                spy={true}
                smooth={true}
              >Home</Link></li>

              <li><Link
                onClick={() => { setMenuOpened(false) }}
                to='programs'
                spy={true}
                smooth={true}
              >Programs</Link></li>

              <li><Link
                onClick={() => { setMenuOpened(false) }}
                to='reasons'
                spy={true}
                smooth={true}>Why Us</Link></li>

              <li><Link
                onClick={() => { setMenuOpened(false) }}
                to='plans'
                spy={true}
                smooth={true}>Plans</Link></li>

              <li ><Link
                onClick={() => { setMenuOpened(false) }}
                to='testimonials'
                spy={true}
                smooth={true}
              >Testimonials</Link></li>

              <li ><Link
                onClick={() => { setMenuOpened(false) }}
                to='join'
                spy={true}
                smooth={true}
              >Join Us</Link></li>
            </ul>
        }

      </div>
    </div>
  )
}

export default Header
