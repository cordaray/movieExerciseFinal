import React, {Component} from 'react';

class Genres extends Component {

    render(){

    const {genres, onFilterMovies, currentGenre} = this.props

    return (
        <ul className="list-group shadow-sm p-3 mb-5 bg-white rounded">
            <li className={currentGenre === "All Genres" ? "list-group-item list-group-item-secondary" : "list-group-item"} onClick={()=>onFilterMovies("All Genres")}>All Genres</li>
            {genres.map(genre=>(<li className={currentGenre === genre.name ? "list-group-item list-group-item-secondary" : "list-group-item"} key={genre.name} onClick={()=>onFilterMovies(genre.name)}>{genre.name}</li>))}
        </ul>
    );

    }

}

export default Genres;