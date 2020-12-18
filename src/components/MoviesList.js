import React from "react";
import '../styles/styles.css'
export default function MoviesList(props) {
    //from the List component, the MoviesList component was sent a prop called 'movie' which was each object from the array of data we imported.
    //we can display the movie prop from List.js inside jsx below
    return (
    <div>
      <img className="movie-poster" src={props.movie.posterImg} alt='Movie Poster'/>
      <p>{props.movie.title}</p>
      <div>{props.movie.year}</div>
    </div>
  );
}
