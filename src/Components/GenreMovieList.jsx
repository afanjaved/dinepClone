/* eslint-disable no-unused-vars */
import React from 'react'
import GenresList from '../Constants/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map((item,index)=>(
        <div  key={index} className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
            <MovieList genereid={item.id}/>
        </div>
        
      ))}
    </div>
  )
}

export default GenreMovieList
