/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
//CONSTANTS
export const GET_PLAYLISTS = "GET_PLAYLISTS";
const SET_PLAYLISTS = "SET_PLAYLISTS";
export const GET_PODCASTS = "GET_PODCASTS";
const SET_PODCASTS = "SET_PODCASTS";
export const GET_ARTISTS = "GET_ARTISTS";
const SET_ARTISTS = "SET_ARTISTS";
export const GET_ALBUMS = "GET_ALBUMS";
const SET_ALBUMS = "SET_ALBUMS";

//ACTIONS
export const getPlaylists = () => ({
    type: GET_PLAYLISTS
})

export const getPodcasts = () => ({
    type: GET_PODCASTS
})

export const getArtists = () => ({
    type: GET_ARTISTS
})

export const getAlbums = () => ({
    type: GET_ALBUMS
})

export const setPlaylists = (playlists) => ({
    type: SET_PLAYLISTS,
    playlists
})

export const setPodcasts = (podcasts) => ({
    type: SET_PODCASTS,
    podcasts
})

export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
})

export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
})

// INITIAL STATE
const initialState = {
    playlists: [],
    podcasts: [],
    artists: [],
    albums: []
}

//REDUCER
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYLISTS:
            const { playlists } = action;
            return {...state, playlists}
        case SET_PODCASTS:
            const { podcasts } = action;
            return {...state, podcasts}
        case SET_ARTISTS:
            const { artists } = action;
            return {...state, artists}
        case SET_ALBUMS:
            const { albums } = action;
            return {...state, albums}
        default:
            return {...state}
    }
}