import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Moviecard from "../components/Moviecard";

export default function Home(){
    const moviesData = useLoaderData()
    // console.log(moviesData.results);
    const movies = moviesData && moviesData.results
    const randomNumber = Math.floor(Math.random() * (100 - 85 + 1) + 85);

    console.log(movies);
    return (
        <div>
            <Header 
                      movie={movies[0]}
                      randomNumber={randomNumber}
            
            />
            {movies
            .slice(0, 10)
            .map((movie) => (
              <Link to={`${movie.title}`} key={movie.id}>
              <Moviecard
                movies={movie}
                key={movie.id}
                randomNumber={randomNumber}
              />
              </Link>
            ))}
                    </div>
    )
}

export const moviesLoader = async()=>{

    const API_URL = "https://api.themoviedb.org/3/movie/";
    const API_KEY = "e0b1fc5ecbc2eac6eed8d5c59970e3d8";
  
    const res = await fetch (`${API_URL}top_rated?api_key=${API_KEY}`)

    return res.json()
}