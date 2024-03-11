import React from 'react';

import {AboutUs, Header, Chief, FindUs, Footer, Gallary, Intro, Laurels, Menu} from './container';
import { Navbar } from './components';

import './App.css'
function App() {
  return (
        <div >
            < Navbar/>
            < Header/>
            < AboutUs/>
            < Menu/>
            < Chief/>
            < Intro/>
            < Laurels/>
            < Gallary/>
            < FindUs/>
            < Footer/>
        </div>
      
  );
}
export default App;
