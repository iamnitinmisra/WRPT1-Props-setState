import React, { Component } from "react";

//import our data from data.json
import data from "../data/data.json";
import MoviesList from "./MoviesList";

class List extends Component {
  constructor() {
    super();
    this.state = {
      appTitle: "Movies List",
      input: "",
      movies: data, //store our imported data directly on state
    };

  }

  // this method handles the user typing in the input box
  changeHandler(event) {
    event.preventDefault();
    this.setState({
      input: event.target.value,
    });
  }


  // after the the user submits the new name, this function executes physically changing it in state so we can see the new name displayed
  changeTitle(event) {
    event.preventDefault()
    this.setState({
        appTitle: this.state.input
    })
  }

  render() {
    // Since we know this.state.movies is an array of objects, we are able to use an array method on it. we use .map to pull each element out of the array and display them individually in the MoviesList component
    const mappedMovies = this.state.movies.map((element) => {
      return <MoviesList movie={element} key={element.id}/>; // we can pass element from the array to the MoviesList Component as a prop
    });

    return (
      <div>
        <div>{this.state.appTitle}</div>
        {/* onsubmit will handle the function for changing the title when the button is clicked */}
        <form onSubmit={(event)=>this.changeTitle(event)}>

            {/* onChange will handle updating this.state when the user types in the input box */}
          <input
            onChange={(event) => this.changeHandler(event)}
          ></input>
          <input type="submit"></input>
        </form>

        {/* Display the mapped Movies inside of the JSX so React renders it. */}
        <div>{mappedMovies}</div>
      </div>
    );
  }
}

export default List;
