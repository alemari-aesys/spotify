import axios from "axios";
import { call,put } from "redux-saga/effects";
import { setArtists } from "../../reducers/AppBarReducer";

function* handleGetArtists() {

    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    };

    var artists = [];
    
    try {
       yield call (()=>{axios.get("https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin,08td7MxkoHQkXnWAYD8d6Q,43ZHCT0cAZBISjO8DG9PnE,0OdUWJ0sBjDrqHygGUXeCF", config).then(res=>res.data.artists.map(elem=>artists.push(elem)))})
    } catch (error) {
        console.error(error);
    }
    try {
        yield put(setArtists(artists));
    } catch (error) {
        console.log(error);    
    }

}

export default handleGetArtists;