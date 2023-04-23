import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ErrorPage from './Pages/error/ErrorPage';
import HomePage from './Pages/homepage/HomePage';
import MoviesPage from './Pages/moviespage/MoviesPage';



function App() { 
    const [user, setUser] = useState(false);

  return (    
    <div className="app">
      <HomePage/>  
      {/* <MoviesPage/> */}
    </div>      
  )
}

export default App;
