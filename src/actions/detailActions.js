import axios from 'axios';
import {gameDetailURL,gameScreenShotURL} from '../Api';

export const LoadDetail = (id) => async (dispatch)=>{
    const detailData = await axios.get(gameDetailURL(id));
    const screenShotData = await axios.get(gameScreenShotURL(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game:detailData.data,
            screen:screenShotData.data,
        },
    });
};

