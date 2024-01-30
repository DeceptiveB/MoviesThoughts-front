import React from 'react'
import movie from '@/models/Movie'
import Movie from './ Movie'

const MovieList = ({ movies }: { movies: movie[] }) => {
    const movieList = movies as movie[];
    return (
        <div>
            {movieList.length > 0 && movieList.map((movie) => (
                <Movie movie={movie}/>        
            ))}
        </div>
    )
}

export default MovieList