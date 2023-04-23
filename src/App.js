import React , {useEffect , useState} from 'react'

import { BrowserRouter, Routes, Route,} from "react-router-dom";
import MovieDetails from './components/MovieDetails';

import Footer from './components/Footer'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import axios from 'axios'
export default function App() {
const [movies , setMovies] = useState([]) ;
const [pageCount , setpageCount] = useState(0) ;

  const getAllMovies = async ()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5ec279387e9aa9488ef4d00b22acc451&language=en-US`);
    // console.log(res.data.results)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  } //getAllMovies

  const search = async (word)=>{
    if(word === ""){
       getAllMovies();
    }else{
      const res =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5ec279387e9aa9488ef4d00b22acc451&language=en-US&query=${word}`);
      // console.log(res.data.results)
      setMovies(res.data.results)
      setpageCount(res.data.total_pages)
    }
  } //search

  const getPage = async (page)=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5ec279387e9aa9488ef4d00b22acc451&language=en-US&page=${page}`);
    // console.log(res.data.results)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  } //getPage

  // search("cat")

useEffect( ()=>{
    getAllMovies();
} , []);

  return (
    <div>
    <Header search={search} />

    <BrowserRouter>
      <Routes>
         <Route path='/' element={<MoviesList movies = {movies} getPage ={getPage} pageCount={pageCount} />} />
         <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
  )
}
