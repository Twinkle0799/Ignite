import React from 'react';

//components and pages
import Home from './pages/home';
import GlobalStyles from './components/globalStyle';

import {Route} from 'react-router-dom';

function App() {
 
  return (

    <div className="App">
      {/* <h1>HEllo ignite! </h1> */}
      <GlobalStyles/>
      <Route path={["/game/:id","/"]}>
      <Home/>
      </Route>
    </div>
  );
}

export default App;
 