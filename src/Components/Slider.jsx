/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef} from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const screenWidth=window.innerWidth;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingMovies()
            .then(resp => {
                console.log('Trending Movies Response:', resp.data.results);
                setMovieList(resp.data.results);
            })
            .catch(error => {
                console.error('Error fetching trending movies:', error);
            });
    };

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer " onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"  onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4
    scrollbar-hide scroll-smooth ' ref={elementRef}>
                {movieList.map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={IMAGE_BASE_URL + item.backdrop_path}
                            alt={item.title || 'Movie Image'}
                            className='min-w-full h-[310px] object-cover object-left-top
      mr-5 rounded-md hover:border-[4px]'
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
