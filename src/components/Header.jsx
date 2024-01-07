export default function Header (props){
    const img_src = `http://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;

    return(
        <div className="header"
        style={{
            width: "100%",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${img_src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            color: "white",
          }}
        >
            <div className="header-body">
        {/* <img src={img_src} alt="Image" /> */}
        <div className="search-bar">
          
            <h2>MovieBox</h2>
        
          <input type="text" />
          
            <p>Sign In</p>
          
        </div>
        <div className="header-details">
          <h1>{props.movie.title}</h1>
          <div className="header-ratings">
            <div className="imdb">
              <p>
                {/* {props.imdbLogo} */}
                {props.movie.vote_average}/10
              </p>
            </div>

            <div className="rotten">
              <h4>{<p>{`${props.randomNumber}%`}</p>}</h4>
            </div>
          </div>
          <p className="header-overview">{props.movie.overview}</p>
          
          <input type="button" value="Watch Trailer" className="button" />
        </div>
      </div>

        </div>
    )
}