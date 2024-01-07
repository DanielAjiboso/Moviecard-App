import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Home, { moviesLoader } from './pages/Home';
import Trailer, { trailerLoader } from './pages/Trailer';
import './App.css'
import './Page2.css'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route index element={<Home />} loader={moviesLoader}/>
//     </Route>
//   )
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<RootLayout />} >
      < Route index element = {<Home />} loader={moviesLoader} />
      <Route path=':title' element={<Trailer />} loader={trailerLoader} />
    </Route>
  )
) 
function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App

