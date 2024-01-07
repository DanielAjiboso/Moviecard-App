import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Moviecard from "../components/Moviecard";

const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "e0b1fc5ecbc2eac6eed8d5c59970e3d8";


export default function Home(){
    const moviesData = useLoaderData()
    // console.log(moviesData.results);
    const movies = moviesData && moviesData.results
    const randomNumber = Math.floor(Math.random() * (100 - 85 + 1) + 85);

    console.log(movies);
    return (
        <div className="home">
          <Link to={`${movies[0].title}`} className="link">
          <Header 
                      movie={movies[0]}
                      randomNumber={randomNumber}
            
            />
          </Link>
          <div className="moviecard-layout">

            {movies
            .slice(0, 10)
            .map((movie) => (
              <Link to={`${movie.title}`} key={movie.id} className="link">
              <Moviecard
                movies={movie}
                key={movie.id}
                randomNumber={randomNumber}
              />
            
              </Link>
            ))}
            </div>
                    </div>
    )
}

// export const searlchLoader = async()=>{
//   const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key =e0b1fc5ecbc2eac6eed8d5c59970e3d8&query = ${}`)
// }

export const moviesLoader = async()=>{

  
    const res = await fetch (`${API_URL}top_rated?api_key=${API_KEY}`)

    return res.json()
}