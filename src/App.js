
import React from "react";
import { Routes, Route} from "react-router-dom";
import Header from './components/Header.js';
import Home from './pages/Home.js';
import SearchCocktail from './pages/SearchCocktail.js';
import CoctailsStared from './pages/CoctailsStared.js';
import CocktailDetails from './pages/CocktailDetails.js';
import { StaredCocktailsProvider } from "./context/staredCocktailsContext.js";
import PageNotFound from "./pages/PageNotFound.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {

  return(
    <div className="main-content">
      <StaredCocktailsProvider>
      <Header />
      <Routes>
       <Route
        path='/'
        element={<Home />}
        />
       <Route
        path='/:id'
        element={<CocktailDetails />}
        />
        <Route
        path='/search-cocktail'
        element={<SearchCocktail />}
        />
        <Route 
          path='/search-cocktail/:id' 
          element={<CocktailDetails />}
        />
        <Route 
        path='/stared-cocktails'
        element={<CoctailsStared />}
        />
        <Route
        path='*'
        element={<PageNotFound />}
        />
      </Routes>
      </StaredCocktailsProvider>
    </div>
    )
}

export default App;
