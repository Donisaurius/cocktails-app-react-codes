import React,{useRef} from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  
  const navbarRef = useRef();

  const active = ({isActive}) => isActive
                                ? 'is-active'
                                : null;

  document.addEventListener("click",e => {

    if(window.screen.width > 900) return
    
    if(e.target.matches(".menu-item *")){
      if(!navbarRef.current) return
      document.querySelector(".principal-btn").classList.remove("change");
      
      if(!navbarRef.current.classList.contains('animationMenuToVisible')){
        navbarRef.current.classList.add('animationMenuToHidden');
        return navbarRef.current.classList.toggle('noVisible');
      }
      
      if(navbarRef.current.classList.contains('animationMenuToVisible')){
        navbarRef.current.classList.replace('animationMenuToVisible','animationMenuToHidden');
        return navbarRef.current.classList.toggle('noVisible');
      }

    }
    
  })

  return(
    <nav 
      className='navbar noVisible withAnimation z-index-2 container justify-content-md-end'
      ref={navbarRef}
      >
      <ul className='d-flex flex-sm-column flex-md-row ps-1 navbar-list-container align-items-center m-0'>
        <li className='mx-4 menu-item'>
          <NavLink
          to='/'
          className={active}
          >Home</NavLink>
        </li>
        <li className='mx-4 menu-item'>
          <NavLink
          to='/search-cocktail'
          className={active}
          >Search cocktail</NavLink>
        </li>
        <li className='mx-4 menu-item'>
          <NavLink 
          to='/stared-cocktails'
          className={active}
          >My favorite cocktails</NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default NavBar;
