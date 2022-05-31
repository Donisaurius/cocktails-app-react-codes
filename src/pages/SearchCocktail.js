import React,{useState} from 'react';
import Loader from '../components/Loader.js';
import Card from '../components/Card.js';

const SearchCocktail = () => {
  
  const searchCocktailByNameURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  
  const handleChange = (e) => {
    
    let {value} = e.target;
    
    setCocktailName(value);
    
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    
    setLoader(true);
    
    fetch(`${searchCocktailByNameURL}${cocktailName}`)
    .then(res => { 
     
      return res.ok 
          ? res.json()
          : Promise.reject(res)
          
    }

    )
    .then(json => {
      
      setCocktails(json.drinks);
     
      } 
    )
    .catch(err => console.log(err))
    .finally(() => {
      return setLoader(false);
    })
    
    setCocktailName('');
    
  }
  
  const [cocktailName,setCocktailName]= useState('');
  const [loader,setLoader] = useState(false);
  const [cocktails,setCocktails] = useState(null);
  
  return(
    <>
      <form
      onSubmit={handleSubmit}
      className="d-flex w-75 mx-auto mt-5"
      >
        <input
        type='text'
        placeholder='What cocktail are you looking for?'
        name='cocktailName'
        className='cocktailName form-control me-2'
        onChange={handleChange}
        value={cocktailName}
        />
        <input
        type='submit'
        value='SEARCH!'
        className='btn btn-outline-dark'
        />
      </form>
      {loader
        ? <Loader />
        : ""
      }
      <div className='container'>
        <div className='row row-cols-md-3 row-cols-sm-1'>
        {
          cocktails === null
          ? <p className='w-100 mt-5 text-center fw-bold fs-1'>Search some cocktail...</p>
          : cocktails.map(cocktail => <Card image={cocktail.strDrinkThumb} title={cocktail.strDrink}
            id={cocktail.idDrink}
            key={cocktail.idDrink}
          />)
        }
        </div>
      </div>
    </>
    )
}

export default SearchCocktail;
