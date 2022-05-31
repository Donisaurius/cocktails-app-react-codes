import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Card = ({image,title,id}) => {
  
  return(
    <div className='col'>
    <div className='container d-flex justify-content-center mt-5 home-container'>
      <div className='card shadow-purple'>
        <figure
          className=''
        >
          <img
          className='card-img-top'
          src={image}
          title={title}
          alt={title}
          />
        </figure>
        <div className='cardTitle'>
          <p className='ms-2'>{title}</p>
        </div>
        <Link
          className='btn btn-outline-light w-50 mx-auto mb-2'
          data-id={id}
          to={id}
          >See more...
        </Link>
        <Outlet />
      </div>
    </div>
    </div>
    )
}

export default Card;
