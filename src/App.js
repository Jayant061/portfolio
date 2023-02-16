import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Explore from './Component/Explore';
import About from './Component/About';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path = "/Explore" element = {<Explore/>}/>
          <Route exact path = "/About" element = {<About/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
