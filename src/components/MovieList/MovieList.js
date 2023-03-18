import Row from 'react-bootstrap/Row';
import Movie from '../Movie/Movie'


function MovieList(props) {

    return (
        <div>
            <Row xs={1} md={5} className="g-3">
                {props.fetch.map((element) => {
                    return (element,

                        <Movie key={element.id} movie={element} />
                    )
                })}
            </Row>
        </div>
    )
}

export default MovieList;

