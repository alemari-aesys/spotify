import { takeLatest, takeEvery } from "redux-saga/effects";
// import { GET_PLAYLISTS } from "../reducers/AppBarReducer";
// import { GET_PODCASTS } from "../reducers/AppBarReducer";
// import { GET_ARTISTS } from "../reducers/AppBarReducer";
// import { GET_ALBUMS } from "../reducers/AppBarReducer";

import { getPlaylists, getPodcasts, getArtists, getAlbums } from "../reducers/AppBarReducer";
import handleGetPlaylists from "./handlers/handleGetPlaylists"
import handleGetPodcasts from "./handlers/handleGetPodcasts";
import handleGetArtists from "./handlers/handleGetArtists";
import handleGetAlbums from "./handlers/handleGetAlbums";




export default function* watcherSaga() {
    console.log(getAlbums);
    yield takeEvery(getPlaylists.type, handleGetPlaylists);
    yield takeEvery(getPodcasts.type, handleGetPodcasts);
    yield takeEvery(getArtists.type, handleGetArtists);
    yield takeEvery(getAlbums.type, handleGetAlbums);
}