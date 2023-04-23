import React from 'react'
import { Link} from "react-router-dom";
import { FaStar } from 'react-icons/fa';
function MovieCard( {mov} ) {
  return (
  
          <div className="col-md-3 col-sm-6 mb-2">
                        <div className="card p-3 text-center">
                            <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} className='rounded' alt="" />
                            <h6 className="py-2 fw-bold"> {mov.original_title} </h6>
                            <h4>  انتاج: {mov.release_date}</h4>
                            <h4>
                              <span> التقيم :</span> <span> {mov.vote_average}  <FaStar className=" text-warning mb-1"/></span>
                            </h4>
                            <Link to={`/movie/${mov.id}`} className="btn btn-dark">تفاصيل الفيلم</Link>
                        </div>{/*card*/}
                    </div>
  
  )
}

export default MovieCard