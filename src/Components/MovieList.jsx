/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'

const MovieList = (props) => {
  const [movieList,setMovieList]=useState([])

  useEffect(() => {
  
      GlobalApi.getMovieByGenreId(props.genereid).then(resp=>{
        console.log(resp.data.results);
        setMovieList(resp.data.results)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='flex overflow-x-auto gap-4'>
       {movieList.map((item,index)=>(
        <MovieCard key={index} movie={item} />
       ))}
    </div>
  )
}

export default MovieList
