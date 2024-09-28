// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App
