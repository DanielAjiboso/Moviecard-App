import { useLoaderData, useParams } from "react-router-dom"

export default function Trailer (){
    const {title} =  useParams()
    const movieDetails = useLoaderData()
    console.log(movieDetails.items[0].id.videoId);
    const trailerId =  movieDetails.items[0].id.videoId 
    // const movie = useLoaderData()  
    return (
        <div className="trailer">
            <iframe width={560} height={315} src={`https://www.youtube.com/embed/${trailerId}`}></iframe>
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

