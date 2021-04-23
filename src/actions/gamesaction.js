import axios from 'axios';
import { popularGamesURL } from '../Api';

//action creator 

export const loadGames = () => async(dispatch) => {

    //FETCH AXIOS
    const popularDATA = await axios.get(popularGamesURL());
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular:popularDATA,
        },
    })
}