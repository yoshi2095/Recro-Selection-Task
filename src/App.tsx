import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/common/Header';
import Search from './components/common/Search'
import MoviesList from './components/MoviesList';
import Footer from "./components/common/Footer";



function App() {
  let [allMovies, setAllMovies] = useState([])
  let [selectedMovies, setSelectedMovies] = useState([]);
  let [selectedType, setSelectedType] = useState(1);
  let [query, setQuery] = useState('')
  let [searchClicked, setSearchClicked] = useState(false);
  let [showResult, setShowResult] = useState(false)

  function setMoviesByType(type:number, movies = []) {
    let sMovies = []
    if(type === 1) {
      sMovies = movies.filter((m:any) => {
        return m.media_type === 'movie'
      })
    } else {
      sMovies = movies.filter((m:any) => {
        return m.media_type === 'tv'
      })
    }
    setSelectedMovies(JSON.parse(JSON.stringify(sMovies)));
  }

  function handleSearch(value='') {
    setSearchClicked(false)
    setQuery(value);
  }

  function handleSearchClick() {
    if(!query) return
    setSearchClicked(true)
    fetchMovies()
    setShowResult(true)
  }

  function fetchMovies() {
    let API_KEY = 'ab2ea070f9aa3c1aa576539e31964dd5';
    let API_URL = ''
    if(query) {
      API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    } else {
      API_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    }

    fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
    }).then(res => {
      return res.json()
    }).then(res => {
      setAllMovies(JSON.parse(JSON.stringify(res.results)));
      if(query) {
        setSelectedMovies(JSON.parse(JSON.stringify(res.results)))
      } else {
        setMoviesByType(1, res.results)
      }
      // setSearchClicked(false)
    })
  }

  useEffect(()=>{
    fetchMovies()
  }, [])

  useEffect(()=>{
    setMoviesByType(selectedType, allMovies)
  }, [selectedType])




  return (
    <div className="App">
      <Header/>
      <div className='banner'>
          <h1 className='banner-title'>
            Welcome to the weekend watch
          </h1>
          <div className='banner-subtitle'>
            Millions of Movies, TV Shows and many more
          </div>
          <Search onChange={handleSearch} handleSearchClick={handleSearchClick}/>
      </div>
      {
        React.useMemo(()=><MoviesList showResult={showResult} movies={selectedMovies} selectedType={selectedType} setSelectedType={(type = 0)=>{
          setSelectedType(type)
        }} query={query} searchClicked={searchClicked}/>, [selectedMovies])
      }
      
      <Footer/>
    </div>
  );
}

export default App;
