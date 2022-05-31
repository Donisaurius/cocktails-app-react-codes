import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
    
    const navigate = useNavigate();
    
    const toHome = () => {

        return navigate("/",{replace: true})
    
    }
    
    return(
        <div className="page-not-found-container">
            <div className="page-not-found">
                <p>PAGE NOT FOUND</p>
                <button 
                    className="go-to-home"
                    onClick={toHome}
                    >Go to home</button>
            </div>
        </div>
    )
}

export default PageNotFound;