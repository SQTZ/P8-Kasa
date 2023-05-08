import React from "react";
import "./Banniere.css";

function Banniere({image, texte}) {
    return(
        <div className="banniere">
            <img className="banniere-img" src={image} alt="Bannière"/>
            <div className="banniere-sombre"></div>
            <span className="banniere-txt">{texte}</span>
        </div>
    );
}

// banniere-img -> l'image de la bannière
// banniere-sombre -> le filtre sombre
// banniere-txt -> le texte de la bannière
export default Banniere;