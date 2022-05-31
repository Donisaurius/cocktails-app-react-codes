import React, { useContext } from 'react'
import StaredDrinksCards from '../components/StaredDrinksCards';
import StaredCocktailsContext from '../context/staredCocktailsContext';

const CoctailsStared = () => {

  const {stareds} = useContext(StaredCocktailsContext);
  
  const drinks = stareds || "";

  const arrDrinks = Object.entries(drinks);

  console.log(arrDrinks)

  return(
    <div className='container mt-5'>
    
      <h2>Favourites Cocktails</h2>
      <div className='row'>
        {
          arrDrinks 
          && arrDrinks.map(drink => <StaredDrinksCards 
                                      title={drink[1].strDrink}  
                                      id={drink[1].idDrink} 
                                      category={drink[1].strCategory}
                                      key={drink[1].idDrink} />)
        }
      </div>

    </div>
    )
}

export default CoctailsStared;
