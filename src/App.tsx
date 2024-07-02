import './index.css';
import MoviePlaylist from './features/playlist/MoviePlaylist';
// import SongPlaylist from './features/playlist/SongPlaylist';

export default function App() {
	const handleResetClick = () => {
		//
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
