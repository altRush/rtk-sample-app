import './index.css';
import MoviePlaylist from './features/playlist/MoviePlaylist';
import { useDispatch } from 'react-redux';
import { handleMovieRest } from './features/playlist/moviePlaylistSlice';
// import SongPlaylist from './features/playlist/SongPlaylist';

export default function App() {
	const confirmReset = (): boolean => {
		return confirm('All movies and songs will be DELETE! Are you sure?');
	};

	const dispatch = useDispatch();

	const handleResetClick = () => {
		const confirm = confirmReset();
		if (!confirm) return;
		dispatch(handleMovieRest());
	};

	return (
		<div className="container is-fluid">
			<button onClick={() => handleResetClick()} className="button is-danger">
				Reset Both Playlists
			</button>
			<hr />
			<MoviePlaylist />
			<hr />
			{/* <SongPlaylist /> */}
		</div>
	);
}
