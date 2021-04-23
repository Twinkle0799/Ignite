/* eslint-disable no-unused-vars */
// Base URl

const apikey = '4242b7d0d9d9421bb2c8773d78e01459';
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

export const popularGamesURL = ()=> `${base_url}${popular_games}`;

//console.log(popularGamesURL()); 