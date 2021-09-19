import {Nav} from './components/nav'
import './App.css';
import React, { useState } from 'react';
import About from './components/about/About'
import Finance from './components/financing/Financing'
import Scholarships from './components/scholarships/Scholarships'
import Home from './components/home/Home'
function App() {

  const [state, setstate] = useState(0);
  return (
    <div className="App">
      <header className="App-header">

        <Nav  setState = {setstate}/>
        {state===0 && <Home/>}
        {state===1 && <Finance/>}
        {state===2 && <Scholarships/>}
        {state===3 && <About/>}
      </header>
    </div>
  );
}

export default App;
