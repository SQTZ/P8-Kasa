import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../../assets/api/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Etoile from "../../assets/img/Pages/Fiche-logement/Etoile.png";
import EtoileVide from "../../assets/img/Pages/Fiche-logement/EtoileVide.png";
import Dropdown from "../../components/Dropdown/Dropdown";

function Fiche() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);

    /* Tags */
    const tagsLogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(ficheLogement?.rating)) {
            etoileComplete = false;
        }
        if(etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={Etoile} alt={`${ficheLogement?.rating}/5`}/>)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={EtoileVide} alt={`${ficheLogement?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                 // Expression conditionnelle: si `ficheLogement` est défini, affiche la fiche de logement. Sinon, redirige l'utilisateur vers une page 404.
                ficheLogement ? (

                    // La fiche de logement
                    <div className="Fiche">
                        {/*composant `Carrousel` qui affiche les images du logement passées en tant que propriété `images`. */}
                        <Carrousel images={ficheLogement?.pictures}/>
                        {/*classe CSS `logements-propietaire`, qui contient les informations sur le logement et son propriétaire. */}
                        <div className="logements-propietaire">
                            {/*classe CSS `information-logements`, qui contient le titre, l'emplacement et les tags du logement. */}
                            <div className="information-logements">
                                <span className="titre-logement">{ficheLogement?.title}</span>
                                <span className="endroit-logement">{ficheLogement?.location}</span>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            {/*classe CSS `proprietaire-note`, qui contient les informations sur le propriétaire et la note du logement. */}
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                    <img className="photo-propietaire" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </div>
                        </div>
                        {/*classe CSS `description-equipements`, qui contient la description et les équipements du logement. */}
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement?.description}/>
                            <Dropdown titre="Équipements" description={equipementsLogement}/>
                        </div>
                    </div>
                ) :
                // Redirection vers la page 404
                 <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Fiche;