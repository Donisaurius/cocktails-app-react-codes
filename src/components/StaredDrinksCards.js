import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StaredCocktailsContext from '../context/staredCocktailsContext';

const StaredDrinksCards = ({title,category,id}) => {

    let navigate = useNavigate();

    let {deletingStaring} = useContext(StaredCocktailsContext);

    const Navigating = () => {
        navigate(`/search-cocktail/${id}`);
    }

    return(
    <div className="col-sm-6 d-flex justify-content-center">
        <div className="card my-4">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{category}</p>
            <button 
                className="btn btn-outline-light"
                onClick={Navigating}
                >See more...</button>
            <button 
              className="btn btn-danger ms-4"
              onClick={() => deletingStaring(id)}
              >Delete</button>
          </div>
        </div>
    </div>
    )
}

export default StaredDrinksCards;