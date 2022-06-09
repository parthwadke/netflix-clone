import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';

function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner />
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentatries" fetchUrl={requests.fetchDocumantaries}/> 

    </div>
  );
}

export default App;
