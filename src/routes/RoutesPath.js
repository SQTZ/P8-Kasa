import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout"
import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fiche-logement/Fiche';
import APropos from "../pages/A-propos/APropos";
import Erreur404 from "../pages/404/404";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    {/* Route par défaut */}
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    {/* Route Accueil */}
                    <Route path="/accueil" element={<Accueil />}/>
                    {/* Route Fiche */}
                    <Route path="/logement/:id" element={<Fiche />}/>
                    {/* Route A Propos */}
                    <Route path="/a-propos" element={<APropos />}/>
                    {/* Route 404 */}
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;