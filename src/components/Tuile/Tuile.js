import React from "react";
import "./Tuile.css";

function Tuile({id, image, titre}) {
    return(
        <div className="tuile" id={id}>
            <img className="tuile-image" src={image} alt="Tuile"/>
            <div className="tuile-sombre"></div>
            <span className="tuile-titre">{titre}</span>
        </div>
    );
}

// tuile-image -> l'image de l'appartement
// tuile-sombre -> le filtre sombre
// tuile-titre -> le titre de l'appartement
export default Tuile;