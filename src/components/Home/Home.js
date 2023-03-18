import MovieList from '../MovieList/MovieList'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'


function Home() {

    const [moviesArr, setMoviesArr] = useState([])

    const sendReq = async () => {
        const serverURL = `https://movies-library-6swwawdzv-esmail-jawabreh.vercel.app/trending`;
        const req = await axios.get(serverURL);
        setMoviesArr(req.data);
    }

    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div class='div'>
            <MovieList fetch={moviesArr} />
        </div>
    );
}

export default Home;

