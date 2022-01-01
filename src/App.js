import './App.css';
import { Link } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';
import React from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-home">
      <nav>
         <Link to="/">Home</Link>
        </nav>
      </header>
        
     
      <CustomRoutes />
    </div>
  );
}

export default App;
