import React, {createContext, useEffect, useState } from "react";

const StaredCocktailsContext = createContext();

let initValues = localStorage.getItem("stared-drinks") || "{}";
initValues = JSON.parse(initValues); 

const StaredCocktailsProvider = ({children}) => {

    //Global. Here are the stareds drinks of the app
    const [stareds,setStareds] = useState(initValues);

    //uploading the vars
    useEffect(() => {
    
        localStorage.setItem("stared-drinks",JSON.stringify(stareds));
    
    },[stareds])

    const handleStaring = (id,drink) => {

        setStareds(() => {
            
            return {
                ...stareds,
                [id]:drink    
            }
        })
            
        console.log(stareds)
    }

    const deletingStaring = (id) => {

        //Create a copy, delete the prop, and upload the stareds
        let newStareds = stareds;

        delete newStareds[id];

        setStareds(() => {
            return {
                ...stareds  
            }
        })
    }

    const data = {stareds,handleStaring,deletingStaring};

    return(
        <StaredCocktailsContext.Provider value={data}>
            {children}
        </StaredCocktailsContext.Provider>
    )
}

export {StaredCocktailsProvider};

export default StaredCocktailsContext;
