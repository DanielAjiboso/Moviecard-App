import { useLoaderData, useParams } from "react-router-dom"

export default function Trailer (){
    const {title} =  useParams()
    console.log(title);
    // const movie = useLoaderData()  
    return (
        <div className="trailer">
            <h2>{title}</h2>
        </div>
    )
}

// export const trailerLoader = async({params}) =>{
//         const {id } = params 
//         const res = await fetch('')
        

//         return res.json()
// }   