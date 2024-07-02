import { useDispatch, useSelector } from 'react-redux';
import { createRandomMovie } from '../../data';
import { RootState } from '../../store';
import { handleMovieAdd, handleMovieRemove } from './moviePlaylistSlice';

function MoviePlaylist() {
	const moviePlaylist = useSelector(
		(state: RootState) => state.moviePlaylistSlice.moviePlaylist
	);
	const dispatch = useDispatch();

	const renderedMovies = moviePlaylist.map(movie => {
		return (
			<li key={movie}>
				{movie}
				<button
					onClick={() => dispatch(handleMovieRemove(movie))}
					className="button is-danger"
				>
					X
				</button>
			</li>
		);
	});

	return (
		<div className="content">
			<div className="table-header">
				<h3 className="subtitle is-3">Movie Playlist</h3>
				<div className="buttons">
					<button
						onClick={() => dispatch(handleMovieAdd(createRandomMovie()))}
						className="button is-link"
					>
						+ Add Movie to Playlist
					</button>
				</div>
			</div>
			<ul>{renderedMovies}</ul>
		</div>
	);
}

export default MoviePlaylist;