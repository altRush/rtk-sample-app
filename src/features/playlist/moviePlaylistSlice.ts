import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MoviePlaylistState {
	moviePlaylist: string[];
}

const initialState: MoviePlaylistState = {
	moviePlaylist: []
};

export const moviePlaylistSlice = createSlice({
	name: 'moviePlaylist',
	initialState,
	reducers: {
		handleMovieAdd: (
			state: MoviePlaylistState,
			action: PayloadAction<string>
		) => {
			state.moviePlaylist.push(action.payload);
		},
		handleMovieRemove: (state, action: PayloadAction<string>) => {
			state.moviePlaylist = state.moviePlaylist.filter(
				movie => movie !== action.payload
			);
		}
	}
});

// Action creators are generated for each case reducer function
export const { handleMovieAdd, handleMovieRemove } = moviePlaylistSlice.actions;

export default moviePlaylistSlice.reducer;
