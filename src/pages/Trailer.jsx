import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"
import About from "../components/About"
import axios from "axios"

export default function Trailer (){
    const {title} =  useParams()
    const movieDetails = useLoaderData()
    // console.log(movieDetails.items[0].id.videoId);
    const trailerId =  movieDetails.items[0].id.videoId 
    // const movie = useLoaderData()  

    const [video, setVideo] = useState(true)
    const [videoDetails, setVideoDetails] = useState('')
    const API_KEY= 'e0b1fc5ecbc2eac6eed8d5c59970e3d8';

    useEffect(()=>{
        // const loadAbout= async()=>{
        //     const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e0b1fc5ecbc2eac6eed8d5c59970e3d8&query=${title.split(' ').join('')}`)
        // setVideoDetails(res.data)
        // }
        axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: `${title}`,
          language: "en_US",
        },
      })
      .then((response) => {
        setVideoDetails(response.data.results[0]);
      })
        },[])
    console.log(videoDetails);

    const playVideo = function(){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.one').classList.add('active')
        setVideo(true)
    }
    const switchVideo = function(){
        document.querySelector('.active').classList.remove('active')

        document.querySelector('.next').classList.add('active')

        setVideo(false)
    }
    return (
        <div className="trailer">
            <div className="sidebar">
                <h1 className="active one" onClick={playVideo}>Trailer</h1>
                <h1 className="next" onClick={switchVideo}>About Movie</h1>
                <Link className="link" to={'/'}><h1>Back to Homepage</h1></Link>
            </div>
        
           { video?<iframe  className="trailer-video" src={`https://www.youtube.com/embed/${trailerId}`}></iframe>: <About videoDetails={videoDetails}/>}
            

        
        </div>
    )
}

export const trailerLoader = async({params}) =>{
   const {title } = params 
   const movieTitle = title.split(' ').join('')
//    const youtubeAPI_KEY = AIzaSyAIPpJbjPKyshlfW6DQO92tzmE0-ribseQ
         const res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${movieTitle}+trailer&key=AIzaSyAIPpJbjPKyshlfW6DQO92tzmE0-ribseQ`)
        

       return res.json()
}   


// AIzaSyAIPpJbjPKyshlfW6DQO92tzmE0-ribseQ

