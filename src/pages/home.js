import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from "../actions/gamesaction";

//components
import Game from '../components/Game';

//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Home = () => {
    //Fetch Games
    const dispatch = useDispatch();
    useEffect(()=> {dispatch(loadGames())},[dispatch]);
    //Get the data back
    const {popular,newGames,upcoming}  = useSelector((state)=>state.games);
    // console.log(games)

    return(
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game name ={game.name} released = {game.released} 
                     id = {game.id} image = {game.background_image} key = {game.id}/>
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
padding : 0rem 5rem;
h2{
    padding : 5rem 0rem;
}
`;
const Games = styled(motion.div)`
min-height: 80vh;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-column-gap: 3rem;
grid-row-gap:5rem;
`;

export default Home;