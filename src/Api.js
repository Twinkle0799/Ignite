/* eslint-disable no-unused-vars */
// Base URl

const apikey = process.env.REACT_APP_API_KEY;
const base_url = 'https://api.rawg.io/api/';

//Getting the month
const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    //console.log(month);
    if(month<10)
    {
        return `0${month}`
    }
    else
    {
        return month
    }
}

//Getting the Date
const getCurrentDay = () =>{
    const day = new Date().getDate();
   // console.log(day);
    if(day<10)
    {
        return `0${day}`
    }
    else
    {
        return day
    }
}
const currentYear = new Date().getFullYear();
//console.log(curentYear);

const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
console.log(currentDate);
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const NextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${apikey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apikey}&dates=${currentDate},${NextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apikey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = ()=> `${base_url}${popular_games}`;
export const upcomingGamesURL = ()=> `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game details
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}?key=${apikey}`;

//game ss
export const gameScreenShotURL = (game_id) => `${base_url}games?key=${apikey}&/${game_id}/screenshots`;


//console.log(popularGamesURL()); 