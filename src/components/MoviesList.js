import React from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'

function MoviesList( {movies , getPage , pageCount} ) {
    return (

        <section className="py-5">
            <div className="container">
                <div className="row">
{
    movies.length >=1 ? 
    (movies.map( (mov)=>{
        return(<MovieCard key={mov.id}  mov={mov} />)
    } ))
    : "Error"
}
                    


                </div> {/*row*/}
                <Pagination getPage ={getPage} pageCount={pageCount} />
            </div>{/*container*/}
        </section>

    )
}

export default MoviesList