import React from 'react';
import Card from './Card.js'

const api = [
  {
    title: 'Margarita',
    idDrink: 1,
    img: ''
  },
  {
    title: 'Ron',
    idDrink: 2,
    img: ''
  },
  {
     title: 'Anish',
     idDrink: 3,
     img: ''
   }
  ]
 
const CocktailsPractice = () => {
  
  return(
      <div>
      {
        api.map(a => <Card title={a.title} imgage={a.img} id={a.idDrink} key={a.idDrink} />)
      }
      </div>
    )
}

export default CocktailsPractice;
