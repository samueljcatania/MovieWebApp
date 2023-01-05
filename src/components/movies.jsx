import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./common/like";


export default class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies: movies});
    }

    render() {
        const count = this.state.movies.length;
        if (count === 0) {
            return <p>There are no movies in the database</p>;
        } else {
            return (<React.Fragment>
                <p className='m-2'>There are {count} movies in the database.</p>
                <table className='table'>
                    <thead>
                    {this.renderHeaders()}
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
            </React.Fragment>);
        }
    };

    renderHeaders() {
        return (this.state.movies.length > 0 && (<tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th/>
            <th/>
        </tr>));
    }

    renderRows() {
        return this.state.movies.map(movie => <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
                <Like
                    liked={movie.liked}
                    onLike={() => this.handleLike(movie)}
                />
            </td>
            <td>
                <button
                    className='btn btn-danger btn-sm'
                    onClick={() => this.handleDelete(movie)}>Delete
                </button>
            </td>
        </tr>);
    }
}
