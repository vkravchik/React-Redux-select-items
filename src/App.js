import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Car from "./components/Car";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Car/>
        </div>
    );
}

export default App;
