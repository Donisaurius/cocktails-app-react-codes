import React,{useEffect,useState} from 'react';
import Card from '../components/Card.js';
import Loader from '../components/Loader.js';

const Home = () => {
  
  const initialValue = {
    image: '',
    title: '',
    id: ''
  };
  
  const coctailRandomURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  
  const [randomCocktailLoad,setRandomCocktailLoad] = useState(false);
  const [cocktailData,setCocktailData] = useState(initialValue);
  
  useEffect(() => {
/*     console.log('El componente fue montado'); */
    
    fetch(coctailRandomURL)
      .then(res => res.ok 
                  ? res.json()
                  : Promise.reject(res))
      .then(json => {
        
        let cocktail = json.drinks[0];
        
        /* console.log(cocktail); */
        
        setCocktailData({
          image: cocktail.strDrinkThumb,
          title: cocktail.strDrink,
          id: cocktail.idDrink
        });
        
        setRandomCocktailLoad(true);
        
      })
      .catch(err => {
        console.log(err)
      })
      
  },[])
  
  return(
    <>
    {
      randomCocktailLoad
      ? <Card
        image={cocktailData.image}
        title={cocktailData.title}
        id={cocktailData.id}
        />
      : <Loader />
    }
    </>
    )
}

export default Home;
