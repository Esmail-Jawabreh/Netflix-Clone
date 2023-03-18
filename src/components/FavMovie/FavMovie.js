import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import React from 'react'
import ModalFav from '../ModalFav/ModalFav';


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

        const response = await fetch(`${process.env.ServerURL}getmovie/${props.movie.id}`, requestOptions);
        const data = await response.json();
        props.setDeletedArr(data)
    }

    const style1 = { backgroundColor: 'black' };
    const style2 = { width: '18rem' };


    return (
        <div>

            <Col >
                <Card border="danger" style={{ ...style1, ...style2 }} >

                    <Card.Body>

                        <Card.Img height={'250px'} variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />

                        <Card.Header style={{ color: 'yellow' }} >{props.movie.title}</Card.Header>

                        <Card.Text style={{ color: 'red' }} >
                            {`${props.movie.overview.substring(0, 100)}...`}
                        </Card.Text>

                        <Card.Text style={{ color: 'red' }} >
                            {`${props.movie.comment}`}
                        </Card.Text>

                        <Button variant="danger" style={{ width: '50%' }} onClick={() => { handleDelete(props.movie) }}>Delete</Button>
                        <Button variant="success" style={{ width: '50%' }} onClick={() => { handleShow(props.movie) }}>Update</Button>

                    </Card.Body>
                </Card>
            </Col>


            <ModalFav showFlag={showFlag} setNewArr={setNewArr} handleclose={handleclose} MovieData={clickedMovie} />

        </div>
    )
}

export default FavMovie;

