import React from "react";
import './App.css';
import RoutesPath from "../src/routes/RoutesPath";

function App() {
    return (
        <div className="App">
            {/* Je déclare où il doit aller quand il arrive sur le projet */}
            <RoutesPath/>
        </div>
    );
}

export default App;
