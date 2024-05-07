import './App.css'
import Home from './pages/Home'
import Moviedetails from './pages/Moviedetails'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route index element={<Home />} />
        <Route path="details" element={<Moviedetails />} />
        <Route path="/*" element={<Home />} />
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
