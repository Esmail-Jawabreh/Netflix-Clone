import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import React from 'react'
import ModalFav from '../ModalFav/ModalFav';
import '../FavMovie/FavMovie.css'


function FavMovie(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const handleShow = (item) => {
        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }
    
    const setNewArr = (arr) => {
        props.setNewArr(arr)
    }

    const handleDelete = async () => {

        const requestOptions = {
            method: 'DELETE',

        };

        const response = await fetch(`https://movies-library-8ft41utn9-esmail-jawabreh.vercel.app/deleteMovie/${props.movie.id}`, requestOptions);
        const data = await response.json();
        props.setDeletedArr(data)
    }


    return (
        <div>

            <Col >
                <Card id='card'>

                    <Card.Body>

                        <Card.Img height={'280px'} variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />

                        <Card.Header id='header' >{props.movie.title}</Card.Header>

                        <Card.Text id='text' >
                            {`${props.movie.overview.substring(0, 100)}...`}
                        </Card.Text>

                        <Card.Text id='text' >
                            {`${props.movie.comment}`}
                        </Card.Text>

                        <Button variant="danger"  onClick={() => { handleDelete(props.movie) }}>Delete</Button>
                        
                        <Button variant="success"  onClick={() => { handleShow(props.movie) }}>Update</Button>

                    </Card.Body>
                </Card>
            </Col>


            <ModalFav showFlag={showFlag} setNewArr={setNewArr} handleclose={handleclose} MovieData={clickedMovie} />

        </div>
    )
}

export default FavMovie;

