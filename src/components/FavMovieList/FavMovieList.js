import Row from 'react-bootstrap/Row';
import FavMovie from '../FavMovie/FavMovie';


function FavMovieList(props) {

    const setNewArr = (arr) => {
        props.setNewArr(arr)
    }
    
    const setDeletedArr = (arr) => {
        props.setDeletedArr(arr)
    }

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <Row xs={1} md={3} className="g-4">
                {props.fetch.map((element) => {
                    return (element,

                        <FavMovie setNewArr={setNewArr} setDeletedArr={setDeletedArr} key={element.id} movie={element} />

                    )
                })}
            </Row>
        </div>
    )
}

export default FavMovieList

