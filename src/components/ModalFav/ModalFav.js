import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import '../ModalFav/ModalFav.css'


function ModalFav(props) {

    const [addFeedback, setAddComm] = useState('');

    function handleFeedback(eve) {
        setAddComm(eve.target.value);
    }

    const handleSave = async () => {

        const dataToSend = {
            movieTitle: props.MovieData.title,
            release_date: props.MovieData.release_date,
            poster_path: props.MovieData.poster_path,
            overview: props.MovieData.overview,
            comment: addFeedback
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        };

        const response = await fetch(`https://movies-library-8ft41utn9-esmail-jawabreh.vercel.app/updateMovie/${props.MovieData.id}`, requestOptions);
        const data = await response.json();
        props.setNewArr(data)
    }



    return (

        <Modal id='modal' show={props.showFlag} onHide={props.handleclose}>


            <Modal.Header id='header' closeButton>

                <Modal.Title id='title'>{props.MovieData.title}</Modal.Title>

            </Modal.Header>


            <Modal.Body id='body'>

                <div id='bodyDiv'>

                    <Image id='img' src={`https://image.tmdb.org/t/p/w500${props.MovieData.poster_path}`}></Image>

                    <Modal.Title id='titleOV'>
                        {props.MovieData.overview}
                    </Modal.Title>
                </div>

                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Label id='label'>Update Your Feedback Here !</Form.Label>

                        <Form.Control defaultValue={props.MovieData.comment} as="textarea" onChange={handleFeedback} rows={3} />

                    </Form.Group>
                </div>

            </Modal.Body>


            <Modal.Footer id="footer">

                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>

                <Button variant="primary" onClick={() => {
                    alert('Updated, Thank You For The Feedback')
                    handleSave();
                    props.handleclose();
                }}>
                    Update Changes
                </Button>

            </Modal.Footer>


        </Modal>
    )
}

export default ModalFav;

// Done