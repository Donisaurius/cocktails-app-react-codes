import React,{useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import likeIcon from "../assets/like-icon.png";
import StaredCocktailsContext from '../context/staredCocktailsContext';

const CocktailDetails = () => {
  
  //const location = useLocation();
  const {id} = useParams();
  const [idDrink,setIdDrink] = useState(id);
  const [drink,setDrink] = useState({});
  const [ingredients,setIngredients] = useState([]);
  const [likeCocktail,setLikeCocktail] = useState(false);
  /*Enviar el ID por parametros para renderizar lo necesario
    Implementar la URL de buscar por ID
  */

  const {handleStaring, deletingStaring} = useContext(StaredCocktailsContext);
  
  useEffect(()=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    
    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
      setDrink(json.drinks[0]);
    })
    .catch(e => console.log(e));

  },[idDrink])
  
  useEffect(() => {
    if(drink){
      addingIngredients();
    }
  },[drink])

  const addingIngredients = () => {

    for(let i = 1;i <= 15;i++){
      if(drink[`strIngredient${i}`]){
        let arr = ingredients;

        if(!arr.includes(drink[`strIngredient${i}`])){
          arr.push(drink[`strIngredient${i}`]);
          setIngredients(arr);
        }
      }
    }

  }
  
  return(
    <div className='container mt-4'>
    { drink &&  
      (
      <>
      <div className=' d-flex flex-column align-items-center'>
        <div className='d-flex w-75 mx-auto my-2 justify-content-between'>
          <h2>{drink.strDrink}</h2>
          <button 
            className='btn p-0'
            onClick={() => {
              
              
              if(likeCocktail){
                console.log("No me gusta")
                setLikeCocktail(false);
                deletingStaring(id);
              }else{
                console.log("Me gusta")
                handleStaring(idDrink,drink);
                setLikeCocktail(true);
              }

            }
            }
            >
            {
              likeCocktail
              ? <img src={likeIcon} alt="Liked icon" className='liked-heart-bottom' />
              : <img src={likeIcon} alt="Like icon" />
            }
          </button>
        </div>
        <figure className='cardContainerImageContainer'>
          <img
          className='CardImage'
          style={{maxWidth:'300px'}}
          src={drink.strDrinkThumb} 
          alt={drink.strDrink}/>
        </figure>
        </div>
        <div className='w-75 mx-auto'>
          <p>Ingredients</p>
          <ul>
          {
            ingredients
              ? ingredients.map(i => <Ingredients text={i} key={i} />)
              : ""
          }
          </ul>
          <p>Is alcoholic? <strong>{drink.strAlcoholic === "Alcoholic" ? "YES" : "NO"}</strong>.</p>
          <p>Category: <strong>{drink.strCategory}</strong></p>
          <h4>Instructions:</h4>  
          <p>{drink.strInstructions && drink.strInstructions}</p>
          {
            drink.strVideo &&
            <p>
              If you want to see a video of how to do the "{drink.strDrink}", <a href={drink.strVideo} target="_blank" rel='noreferrer'>click here</a>
            </p>
           }
      </div>
      </>
      )}
    </div>
    )
}

export default CocktailDetails;
