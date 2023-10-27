import React from 'react'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import axios from 'axios';


const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const baseURL = "http://localhost:8080";
    const revText= useRef();
    let params = useParams();
    const movieId = params.movieId; 

    useEffect(() =>{
        getMovieData(movieId)
        
    },[])
    //once this component mounts for the 1st time, getMovieData func will b invoked from app.js. this is to trigger the get request for movie details

    const addReview = async (e)=>{
        e.preventDefault();
        const rev= revText.current;
        try {
            const response = await axios.post (`${baseURL}/api/v1/reviews`, {reviewBody: rev.value, imdbId:movieId})
            const updatedReviews = [...reviews, {body:rev.value}]
            console.log(updatedReviews)

            rev.value  = "";
            setReviews(updatedReviews);// passed from app component
            
        } catch (error) {
            console.log(error)
        }
        
    }
    
  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className='mt-2'>
            <Col>
                <img src={movie?.poster}/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="write a review"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr/>
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr/>
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews