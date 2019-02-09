import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getMovies} from './services/fakeMovieService';
import {getGenres} from './services/fakeGenreService';
import Table from './components/table'
import Genres from './components/genres'
import {paginate} from './functions/paginate';
import Pagination from './components/pagination';
import _ from 'lodash';

class App extends Component {

  state = {

    movies: getMovies(),

    genres: getGenres(),
    
    currentGenre:"All Genres",

    pageNumber: 1,

    pageSize: 4,

    orderBy: {criteria: "title", order: "asc"}

  }

  render() {

    const {movies,genres,pageNumber,pageSize, currentGenre, orderBy} = this.state;

    let moviesShown = movies

    if (currentGenre !== "All Genres"){

      moviesShown = moviesShown.filter(movie => movie.genre.name === currentGenre);

    }

    moviesShown = _.orderBy(moviesShown,[orderBy.criteria],[orderBy.order]);

    return (
      <div className="App">
      <div className="container">
      <div className="row">
      <div className="col-4">
        <Genres genres={genres} onFilterMovies={this.filterMovies} currentGenre={currentGenre}/>
      </div>
      <div className="col-8 mt-2">
        <p>{`There are ${moviesShown.length} in the database of ${currentGenre}`}</p>
        <Table movies={paginate(pageNumber,pageSize,moviesShown)} onDeleteMovie={this.deleteMovie} onToggleLiked={this.toggleLiked} onOrderBy={this.orderBy}/>
        <Pagination pages={Math.ceil(moviesShown.length/pageSize)} onSwitchPage={this.switchPage}/>
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

  this.setState({pageNumber:1, currentGenre:genre});

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

  orderBy = criteria => {

  this.setState({orderBy: {criteria, order:"asc"}});

  }

}

export default App;
