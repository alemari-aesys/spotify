// /* eslint-disable import/no-anonymous-default-export */
// /* eslint-disable default-case */

import { createSlice } from "@reduxjs/toolkit";

const AppBarSlice = createSlice({
    name: "AppBar",
    initialState : {
        playlists: [],
        podcasts: [],
        artists: [],
        albums: []
    },
    reducers: {
        getPlaylists() {},
        setPlaylists(state, action) {
            const playlists = action.payload;
            // return {...state, playlists}
            state.playlists = playlists.playlists
        },
        getPodcasts() {},
        setPodcasts(state, action) {
            const podcasts = action.payload.items;
            // return {...state, podcasts}
            state.podcasts = podcasts
        },
        getArtists() {},
        setArtists(state, action) {
            const artists = action.payload;
            // return {state.artists, ...artists, ciao: "ciao"}
            state.artists.push(artists)
        },
        getAlbums() {},
        setAlbums(state, action) {
            const albums = action.payload;
            state.albums = albums.albums;
        }
    }
})

export const { getPlaylists, setPlaylists, getPodcasts, setPodcasts, getArtists, setArtists, getAlbums, setAlbums } = AppBarSlice.actions;
export default AppBarSlice.reducer;