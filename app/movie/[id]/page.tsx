import React from 'react'
import { fetchMovie } from '@/lib/fetchMovie';

const fetchMovieItem = async ({id}: {id: number}) => {
  const idMovie = id;
  const movies = await fetchMovie({id : id as number});
  return movies
}

const MoviePage = async ({params} : {params: {id: number}}) => {
  const id = params.id;
  const movie = await fetchMovieItem({ id :  id as number });
  return (
    <div>
      <h2>{movie.name}</h2>
      <p>{movie.argument}</p>
    </div>
  )
}

export default MoviePage