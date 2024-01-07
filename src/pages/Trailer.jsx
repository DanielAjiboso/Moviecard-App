import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"

export default function Trailer (){
    const {title} =  useParams()
    const movieDetails = useLoaderData()
    // console.log(movieDetails.items[0].id.videoId);
    const trailerId =  movieDetails.items[0].id.videoId 
    // const movie = useLoaderData()  

    const [video, setVideo] = useState(true)
    const [videoDetails, setVideoDetails] = useState('')

    const switchVideo = function(){
        document.getElementsByClassName('active').classList.remove('active')
        this.classList.add('active')
        setVideo(false)
    }
    return (
        <div className="trailer">
            <div className="sidebar">
                <h1 className="active">Trailer</h1>
                <h1 onClick={switchVideo}>About Movie</h1>
                <Link className="link" to={'/'}><h1>Back to Homepage</h1></Link>
            </div>
        
            <iframe  className="trailer-video" src={`https://www.youtube.com/embed/${trailerId}`}></iframe>
            

        
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

