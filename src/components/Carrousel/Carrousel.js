import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/img/Components/Carrousel/Fleche.png";

function Carrousel({images}) {
    /* Crée un Hook d'état */
    let [imgAfficher, changerImg] = useState(0);
    let nombreImg = images.length;

    //Lorsque je souhaite changer l'image précedente
    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return(changerImg);
    };  

    //Lorsque je souhaite changer l'image suivante
    const imgSuivante = () => {
        if(imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return(changerImg);
    };

    return(
        <div className="carrousel">
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="flèche précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="flèche suivant" onClick={imgSuivante}/>
            }
        </div>
    );
}

export default Carrousel;