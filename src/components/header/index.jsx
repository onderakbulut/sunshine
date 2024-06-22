import './index.scss'
import { BsSearch, BsJustify, BsX  } from "react-icons/bs";
import { useState, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const getContentHeight = () => {
    return isOpen ? `${contentRef.current.scrollHeight}px` : '';
  };

  const searchOpen = () => {
    document.querySelector('.search-modal').classList.add('-active');
  }

  return (
    <header className={`header ${isActive ? '-menu-open' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            <img src="./logo.svg" alt="Logo" />
          </a>
        </div>
        <div className="header__right">
          <div className={`main-menu ${isActive ? '-hide' : ''}`}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/albums" className={useLocation().pathname == '/album-detail' ? 'active':''}>ALBUMS</NavLink></li>
              <li className='dropdown' onClick={toggleCollapsible}>
                <NavLink to="/about" className='hidden lg:block'>About</NavLink>
                <a href="#" className='lg:hidden'>About</a>
                <div className={`sub-menu ${isOpen ? 'Collapse' : 'Expand'}`} ref={contentRef} style={{
                    maxHeight: getContentHeight()
                  }}>
                  <ul>
                    <li><NavLink to="/album-detail">Albums Details</NavLink></li>
                    <li><NavLink to="/blog-detail">Blog Details</NavLink></li>
                  </ul>
                </div>
              
              </li>
              <li><NavLink to="/blog" className={useLocation().pathname == '/blog-detail' ? 'active':''}>BLOG</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
          </div>
          <div className="user-action">
            <a href="#" onClick={searchOpen}><BsSearch /></a>
            <a href="#" className='menu-toggler' onClick={toggleActive}>
              <BsJustify />
              <BsX />
            </a>
            
          </div>
        </div>
      </div>
    </header>
  )
}
