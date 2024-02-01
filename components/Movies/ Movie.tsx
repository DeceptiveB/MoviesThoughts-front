import React from 'react'
import movie from '@/models/Movie'
import Link from 'next/link'

const  Movie = ({movie} : { movie: movie}) => {
  console.log(movie);
  return (
    <div>
      <h3>{movie.name}</h3>
      <ul>
        <li>{movie.releaseDate}</li>
        <li>{movie.director}</li>
      </ul>
      <Link href={`movie/${movie.id}`} className='btn btn-primary'>Ver más detalles</Link>
    </div>
  )
}

export default  Movie