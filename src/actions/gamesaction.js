import axios from 'axios';
import { popularGamesURL,upcomingGamesURL,newGamesURL } from '../Api';

//action creator 

export const loadGames = () => async(dispatch) => {

    //FETCH AXIOS
    const popularDATA = await axios.get(popularGamesURL());
    const newDATA = await axios.get(newGamesURL());
    const upcomingDATA = await axios.get(upcomingGamesURL());
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular:popularDATA.data.results,
            new : newDATA.data.results,
            upcoming : upcomingDATA.data.results,
        },
    })
}