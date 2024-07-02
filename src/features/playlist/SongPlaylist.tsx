import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../../data';
import { RootState } from '../../store';
import { handleSongAdd, handleSongRemove } from './songPlaylistSlice';

function SongPlaylist() {
	const songPlaylist = useSelector(
		(state: RootState) => state.songPlaylistSlice.songPlaylist
	);

	const dispatch = useDispatch();

	const renderedSongs = songPlaylist.map(song => {
		return (
			<li key={song}>
				{song}
				<button
					onClick={() => dispatch(handleSongRemove(song))}
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
				<h3 className="subtitle is-3">Song Playlist</h3>
				<div className="buttons">
					<button
						onClick={() => dispatch(handleSongAdd(createRandomSong()))}
						className="button is-link"
					>
						+ Add Song to Playlist
					</button>
				</div>
			</div>
			<ul>{renderedSongs}</ul>
		</div>
	);
}

export default SongPlaylist;
