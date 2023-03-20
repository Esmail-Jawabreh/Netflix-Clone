import MovieList from '../MovieList/MovieList'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'


function Home() {

    const [moviesArr, setMoviesArr] = useState([])

    const sendReq = async () => {
        const url = `https://movies-library-8ft41utn9-esmail-jawabreh.vercel.app/trending`;
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

