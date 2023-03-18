import React from 'react'
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Movie.css'

function Movie(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) => {
        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }



    return (
        <div>

            <Col >
                <Card id='card' >

                    <Card.Body>

                        <Card.Img height={'280px'} variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />

                        <Card.Header id='header' >{props.movie.title}</Card.Header>

                        <Card.Text id='text' >
                            {`${props.movie.overview.substring(0, 100)}...`}
                        </Card.Text>
                        
                        <Button variant="light" onClick={() => { handleShow(props.movie) }}>More info</Button>

                    </Card.Body>

                </Card>
            </Col>


            <ModalMovie showFlag={showFlag} handleclose={handleclose} MovieData={clickedMovie} />

        </div>
    )
}

export default Movie;

