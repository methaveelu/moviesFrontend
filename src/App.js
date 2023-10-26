
import axios from 'axios';
import './App.css';
// import api from './api/axiosConfig.js'
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import Header from './components/header/Header';


function App() {
  const [movies, setMovies] = useState();
  const baseURL = "http://localhost:8080"

  const getMovies = async()=>{
    try {
      const response = await axios.get(`${baseURL}/api/v1/movies`);
      
      console.log("🚀 ~ file: App.js:13 ~ getMovies ~ response:", response.data)

      setMovies(response.data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  

  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies} />}/>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}/>
        </Route>
    </Routes>
     
    </div>
  );
}

export default App;
