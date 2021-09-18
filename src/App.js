import {Nav} from './components/nav'
import './App.css';
import React, { useState } from 'react';

function App() {

  const [state, setstate] = useState(0);
  return (
    <div className="App">
      <header className="App-header">

        <Nav  setState = {setstate}/>
        {state==0 && <Home/>}
      </header>
    </div>
  );
}

function Home(){
  return (
    <div>
      home
    </div>
  )
}
export default App;
