import axios from "axios";
import { put } from "redux-saga/effects";
import { setPlaylists } from "../../reducers/AppBarReducer";


function* handleGetPlaylists() {
    

    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    }
    try {
        const response = yield axios.get("https://api.spotify.com/v1/browse/featured-playlists?country=IT&limit=2", config)
        const { data } = response;
        yield put(setPlaylists(data))
    } catch(error) {
        console.error(error);
    }
}

export default handleGetPlaylists