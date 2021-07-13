import { takeLatest, takeEvery } from "redux-saga/effects";
import { GET_PLAYLISTS } from "../reducers/AppBarReducer";
import { GET_PODCASTS } from "../reducers/AppBarReducer";
import { GET_ARTISTS } from "../reducers/AppBarReducer";
import { GET_ALBUMS } from "../reducers/AppBarReducer";
import handleGetPlaylists from "./handlers/handleGetPlaylists"
import handleGetPodcasts from "./handlers/handleGetPodcasts";
import handleGetArtists from "./handlers/handleGetArtists";
import handleGetAlbums from "./handlers/handleGetAlbums";




export default function* watcherSaga() {
    yield takeEvery(GET_PLAYLISTS, handleGetPlaylists);
    yield takeEvery(GET_PODCASTS, handleGetPodcasts);
    yield takeEvery(GET_ARTISTS, handleGetArtists);
    yield takeEvery(GET_ALBUMS, handleGetAlbums);
}