import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'//designed to create an image carousel or slider, allowing you to display a series of images or content in a rotating manner.
import { Paper } from '@mui/material'// gives like a elevation effect to the element.. shadow effect on the borders of component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Hero = ({movies}) => {
  return (
    <div>
        <Carousel>
            {
                movies?.map((movie)=>{
                    return(
                        <Paper key={movie.imdbId}>
                            <div className='movie-card-container' >
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster}/>
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className='movie-button-container'>
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <div className='play-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon' 
                                                        icon={faCirclePlay}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero