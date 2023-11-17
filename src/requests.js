const APIKEY = "e250c452086e79c49de1422690c46ff1";

const requests ={
    fetchTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=2`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=horror&page=1&include_adult=false`,
    fetchcome: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
    
}

export default requests;