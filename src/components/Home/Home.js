import MovieList from '../MovieList/MovieList'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'


function Home() {

    const [moviesArr, setMoviesArr] = useState([])

    const sendReq = async () => {
        const url = `${process.env.REACT_APP_URL}trending`;
        const req = await axios.get(url);
        setMoviesArr(req.data);
    }

    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div id='div'>
            <MovieList fetch={moviesArr} />
        </div>
    );
}

export default Home;

