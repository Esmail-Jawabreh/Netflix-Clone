import FavMovieList from "../FavMovieList/FavMovieList";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../FavList/FavList.css'


function FavList() {

    const [favMovieArr, setFavMoviesArr] = useState([])

    const sendReq = async () => {
        const serverURL = `https://movies-library-8ft41utn9-esmail-jawabreh.vercel.app/getMovies`;
        const req = await axios.get(serverURL);
        setFavMoviesArr(req.data)
    }

    const setNewArr = (arr) => {
        setFavMoviesArr(arr)
    }

    const setDeletedArr = (arr) => {
        setFavMoviesArr(arr)
    }

    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div id='div'>
            <FavMovieList setNewArr={setNewArr} setDeletedArr={setDeletedArr} fetch={favMovieArr} />
        </div>
    )
}

export default FavList;

