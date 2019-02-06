import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getMovies} from './services/fakeMovieService';
import {getGenres} from './services/fakeGenreService';
import Table from './components/table'
import Genres from './components/genres'
import {paginate} from './functions/paginate';
import Pagination from './components/pagination';

class App extends Component {

  state = {

    movies: getMovies(),

    genres: getGenres(),
    
    currentGenre:"All Genres",

    pageNumber: 1,

    pageSize: 4,

  }

  render() {

    const {movies,genres,pageNumber,pageSize, currentGenre} = this.state;

    return (
      <div className="App">
      <div className="container">
      <div className="row">
      <div className="col-4">
        <Genres genres={genres} onFilterMovies={this.filterMovies} currentGenre={currentGenre}/>
      </div>
      <div className="col-8">
        <p>{`There are ${movies.length} in the database of ${currentGenre}`}</p>
        <Table movies={paginate(pageNumber,pageSize,movies)} onDeleteMovie={this.deleteMovie} onToggleLiked={this.toggleLiked}/>
        <Pagination pages={Math.ceil(movies.length/pageSize)} onSwitchPage={this.switchPage}/>
      </div>
      </div>
      </div>
      </div>
    );
  }

  deleteMovie = id => {

    let newMovies = this.state.movies.filter(movie => movie._id !== id);

    this.setState({movies: newMovies});

    console.log(id);
    
  }

  switchPage = page => {

  this.setState({pageNumber: page});

  }

  filterMovies = genre => {

  let movies = getMovies();

  if (genre !== "All Genres"){

  movies = movies.filter(movie => movie.genre.name === genre);

  }

  this.setState({movies, pageNumber:1, currentGenre:genre});

  }

  toggleLiked = id => {

  let movies = this.state.movies.map(movie => {
  
  if (movie._id === id){

  movie.liked = !movie.liked;

  } 

  return movie;

  });

  console.log(movies);

  this.setState({movies});

  }

}

export default App;
