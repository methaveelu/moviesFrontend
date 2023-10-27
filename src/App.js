
import axios from 'axios';
import './App.css';
// import api from './api/axiosConfig.js'
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';


function App() {
  const [movies, setMovies] = useState();
  const [movie,setMovie]= useState();
  const [reviews,setReviews]= useState([]);
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

  const getMovieData = async(movieId)=>{
    try {
      const response = await axios.get(`${baseURL}/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie)
      setReviews(singleMovie.reviews.body)
      console.log(reviews)
    } catch (error) {
      console.log(error);
    }
  }
  // this is to pass data to the review page for invidual movies.. to render poster etc.

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
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}/>
        </Route>
    </Routes>
     
    </div>
  );
}

export default App;
