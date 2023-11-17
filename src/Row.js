import React,{useState,useEffect} from "react";
import "./Row.css"
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title, fetchUrl, isLargeRow}){
    const base_url= "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl]=useState("");
    
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then((url) => {
                const urlParams =new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log("Stuff", urlParams.get("v"))
            })
            .catch((error) => alert("No Trailer Available"));
        }
    };
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    
    const opts ={
        height : "390",
        width: "100%",
        playerVars:{
            autoplay:1,
        },
    };
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="rows__posters">
            {movies.map((movie)=>(
                <img
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`rows__imageposter ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}/>
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row