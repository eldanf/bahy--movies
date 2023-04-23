import axios from 'axios'
import { Link , useParams} from "react-router-dom";
import React , {useEffect , useState} from 'react'
import { FaStar } from 'react-icons/fa';

export default function MovieDetails() {
  const [movie , setMovie] = useState([]) ;
  const param = useParams();

  const getMovieDetails = async ()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=5ec279387e9aa9488ef4d00b22acc451&language=en-US`);
    // console.log(res.data)
    setMovie(res.data)
  } //getMovieDetails

useEffect( ()=>{
  getMovieDetails()
}, [] )

  return (
    <section className="py-5">
    <div className="container">
      <div className="card w-75 mx-auto p-5">

        <div className="row">
            <div className="col-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100 rounded" alt="" />
            </div>
            <div className="col-md-8">
                    <div className='display-6'>
                        <h3>{movie.original_title}</h3>
                        <h4>انتاج :    {movie.release_date}</h4>
                        <h4>التقيم :    {movie.vote_average}   <FaStar className=" text-warning mb-1"/></h4> 
                        <p className="mt-4"> {movie.overview} </p>
                        <a href="detales.html" className="btn btn-dark btn-lg mt-5">مشاهده الفيلم </a>
                    </div>
                </div>
        </div>
      </div>
    </div>
</section>
  )
}
