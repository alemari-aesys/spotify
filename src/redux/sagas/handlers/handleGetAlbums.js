import { put, call } from "@redux-saga/core/effects";
import axios from "axios";
import { setAlbums } from "../../reducers/AppBarReducer";

function* handleGetAlbums() {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    };

    const ids = ["4Gfnly5CzMJQqkUFfoHaP3", "2g1UKV8THjSEhJjmCqOoWd", "0F9brQbQ3vLDYyTElx9f9n", "2eAhp8bMVO4djz2PYoR3gM", "10v912xgTZbjAtYfyKWJCS"]

    try {
        const response = yield call(() => axios.get(`https://api.spotify.com/v1/albums?ids=4Gfnly5CzMJQqkUFfoHaP3,2g1UKV8THjSEhJjmCqOoWd,0F9brQbQ3vLDYyTElx9f9n,2eAhp8bMVO4djz2PYoR3gM,10v912xgTZbjAtYfyKWJCS`, config)
                        .then(res => res))
        const { data } = response;
        yield put(setAlbums(data))
    } catch (err) {
        console.error(err);
    }
}

export default handleGetAlbums;