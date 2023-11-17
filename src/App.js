
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
    </div>
  );
}

export default App;
