/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


const MovieCard = ({movie}) => {
  return (
    < >
      <img className='w-[110px] md:w-[200px]' src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.original_title} />
    </>
  )
}

export default MovieCard;
