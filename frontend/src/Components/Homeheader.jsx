import React, { useContext } from 'react'
import poster from '../assets/poster.webp'
import { useState } from 'react'
import { fetch } from '../utili/api'
import Loader from './Loader'
import { Moviecontext } from '../Context/Moviecontext'
const Homeheader = () => {
  const {setMovie,setMoviedetails}=useContext(Moviecontext)
  const [loading, setLoading]=useState(false)
  const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log("working")
      try {
        setLoading(true)
        const formData = new FormData(e.target);
        const movieName = formData.get('movieName');
        const response=await fetch(movieName)
        if (response){
          console.log(response)
          setMovie(response.movies)
          let allResults = [];
          response.posters.forEach(posterEntry => {
  allResults = allResults.concat(posterEntry.results);
});
          setMoviedetails(allResults)
          
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
  }

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-t  from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={poster}
          alt="temp"
        />

        <div className='absolute lg:w-auto max-lg:w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-8 max-sm:p-0  '>
          <h1 className='text-5xl md:text-5xl font-bold flex justify-center mb-8'>FilmFusion </h1>

          <div className='my-4 max-sm:ml-5  ml-20 flex justify-center flex-col w-full ' >
            <form onSubmit={handleSubmit}>
              <input required name="movieName" type="text" className=" w-[70%]  max-sm:w-auto  border text-black border-gray-300 py-2 px-5 " placeholder="Enter your favourite movie here ..." />
              {loading?<Loader/>:<button type='submit' className=' border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-red-500 hover:text-white'>
                Recommend
              </button>}
            </form>
          </div>


          <p className='w-auto max-sm:ml-5 ml-20 text-gray-200'>
            Welcome to FilmFusion, where we tailor movie recommendations just for you. Sit back, relax, and let us guide you through the world of cinema!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homeheader