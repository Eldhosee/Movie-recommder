import { useState } from 'react';
import './App.css'
import { Moviecontext } from './Context/Moviecontext';
import Home from './pages/Home'
import Moviedetails from './pages/Moviedetails'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
function App() {
  const [movie,setMovie]=useState([])
  const [moviedetails,setMoviedetails]=useState([])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Moviedetails />} />
       
        <Route path="/*" element={<Home />} />
      </Route>
    )
  )
  

  return (
    <>
    <Moviecontext.Provider value={{movie,setMovie,moviedetails,setMoviedetails}}>
      <RouterProvider router={router}/>
      </Moviecontext.Provider>
    </>
  )
}

export default App
