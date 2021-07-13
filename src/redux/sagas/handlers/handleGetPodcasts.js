import axios from "axios";
import { put } from "redux-saga/effects";
import { setPodcasts } from "../../reducers/AppBarReducer";


function* handleGetPodcasts() {
    
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    }
    try {
        const response = yield axios.get("https://api.spotify.com/v1/me/shows", config)
        const { data } = response;
        yield put(setPodcasts(data))
    } catch(error) {
        console.error(error);
    }
}

export default handleGetPodcasts