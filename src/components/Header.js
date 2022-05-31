import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar.js';

const Header = () => {

  const buttonRef = useRef();
  
  const handleClick = e =>{
    e.preventDefault();

    if(window.screen.width > 900) return

    buttonRef.current.classList.toggle("change");

    let nav = document.querySelector('.navbar');
    
    nav.classList.toggle('noVisible');

    if(!nav.classList.contains("animationMenuToHidden")){
      return nav.classList.add('animationMenuToVisible');
    }

    if(nav.classList.contains("animationMenuToHidden")){
      return nav.classList.replace('animationMenuToHidden','animationMenuToVisible');
    }
    
  }
  
  return(
    <>
    <div className='container-fluid header-container'>
      <header className='container header d-flex justify-content-between align-items-center h-25 p-2 fs-4'>
        <Link className='w-50' to='/'>
          What u want to 🍸?
        </Link>
        <NavBar />  
        <button
          onClick={handleClick}
          className='btn btn-outline-secondary principal-btn'
          ref={buttonRef}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </header>
    </div>
    </>
    )
}

export default Header;