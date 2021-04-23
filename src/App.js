import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from "./actions/gamesaction";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> dispatch(loadGames()));
  return (

    <div className="App">
      <h1>HEllo ignite! </h1>
    </div>
  );
}

export default App;
 