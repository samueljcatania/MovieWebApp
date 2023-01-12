import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utilities/paginate";


export default class Movies extends Component {
    state = {
        movies: getMovies(), currentPage: 1, pageSize: 4
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

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    render() {
        const count = this.state.movies.length;
        const {pageSize, currentPage} = this.state;

        if (count === 0) {
            return <p>There are no movies in the database</p>;
        } else {
            const movies = paginate(this.state.movies, currentPage, pageSize)

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
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}/>
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
