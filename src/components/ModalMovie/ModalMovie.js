import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import './ModalMovie.css'   


function ModalMovie(props) {

    const [addFeedback, setAddCom] = useState('');

    function handleFeedback(eve) {
        setAddCom(eve.target.value);
    }

    const dataToSend = {
        movieTitle: props.MovieData.title,
        release_date: props.MovieData.release_date,
        poster_path: props.MovieData.poster_path,
        overview: props.MovieData.overview,
        comment: addFeedback
    }

    const fetchh = async () => {
        await fetch(`https://movies-library-8ft41utn9-esmail-jawabreh.vercel.app/addMovie`, {
            method: 'POST',
            body: JSON.stringify(

                dataToSend
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    

    return (

        <Modal id='modal' show={props.showFlag} onHide={props.handleclose}>


            <Modal.Header id='header' closeButton>

                <Modal.Title id='title'>{props.MovieData.title}</Modal.Title>

            </Modal.Header>


            <Modal.Body id='body'>

                <div id='bodyDiv'>

                    <Image id = 'img' src={`https://image.tmdb.org/t/p/w500${props.MovieData.poster_path}`} ></Image>

                    <Modal.Title id='titleOV'>
                        {props.MovieData.overview}
                    </Modal.Title>

                </div>

                <div>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Label id='label'>Add Your Feedback Here: </Form.Label>

                        <Form.Control as="textarea" onChange={handleFeedback} rows={3} />

                    </Form.Group>

                </div>

            </Modal.Body>


            <Modal.Footer id="footer">

                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>

                <Button variant="primary" onClick={() => {
                    alert('Thanks For the Feedback')
                    fetchh();
                    props.handleclose();

                }}>
                    Add it to Favourite
                </Button>

            </Modal.Footer>


        </Modal>
    )
}

export default ModalMovie;

