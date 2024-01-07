export default function Moviecard(props){
    return(
        
              
      <div className="moviecard">
        <img
          src={`http://image.tmdb.org/t/p/w500/${props.movies.poster_path}`}
          alt="display image"
        />
        <p>USA {`${props.movies.release_date}`.slice(0, 4)} </p>
        <h1>{props.movies.title}</h1>
        <div className="last-bottom">
          <div className="imdb">
            {/* <img src="./IMDB_Logo_2016.svg" /> */}

            <p>{props.movies.vote_average}/10</p>
          </div>
          <div className="rotten-tomatoes">
            <p>{`${props.randomNumber}%`}</p>
          </div>
        </div>
        <p>genre</p>
      </div>

      
    )
}