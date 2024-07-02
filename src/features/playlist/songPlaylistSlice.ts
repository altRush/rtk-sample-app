import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SongPlaylistState {
	songPlaylist: string[];
}

const initialState: SongPlaylistState = {
	songPlaylist: []
};

export const songPlaylistSlice = createSlice({
	name: 'songPlaylist',
	initialState,
	reducers: {
		handleSongAdd: (
			state: SongPlaylistState,
			action: PayloadAction<string>
		) => {
			state.songPlaylist.push(action.payload);
		},
		handleSongRemove: (
			state: SongPlaylistState,
			action: PayloadAction<string>
		) => {
			state.songPlaylist = state.songPlaylist.filter(
				song => song !== action.payload
			);
		},
		handleSongReset: (state: SongPlaylistState) => {
			state.songPlaylist = [];
		}
	}
});

export const { handleSongAdd, handleSongRemove, handleSongReset } =
	songPlaylistSlice.actions;

export default songPlaylistSlice.reducer;
