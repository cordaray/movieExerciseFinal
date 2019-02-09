import React, {Component} from 'react';

class Table extends Component {

render(){

    const {movies, onDeleteMovie, onToggleLiked, onOrderBy} = this.props;


    let newMovies = [...movies];

    return(
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" onClick={()=>onOrderBy("title")}>Title</th>
                    <th scope="col" onClick={()=>onOrderBy("genre")}>Genre</th>
                    <th scope="col" onClick={()=>onOrderBy("numberInStock")}>Stock</th>
                    <th scope="col" onClick={()=>onOrderBy("onDailyRentalRate")}>Rate</th>
                    <th scope="col" onClick={()=>onOrderBy("liked")}>Liked</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                    {movies.map(movie=>(
                        <React.Fragment key={movie.title}>
                        <tr>
                         <td key={movie.title}>{movie.title}</td>
                         <td key={movie.genre.name}>{movie.genre.name}</td>
                         <td key={movie.numberInStock}>{movie.numberInStock}</td>
                         <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                         <td><i className={movie.liked === true ? "fas fa-heart" : "far fa-heart" } onClick={()=>onToggleLiked(movie._id)}></i></td>
                         <button type="button" key={movie._id} className="btn btn-danger mt-1" onClick={()=>onDeleteMovie(movie._id)}>DELETE</button>
                        </tr>
                        </React.Fragment>
                    ))}
            </tbody>
        </table>
        </div>
    );

}

}

export default Table;