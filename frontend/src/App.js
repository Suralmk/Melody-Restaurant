import React from 'react';

import Home from './MainContainer/Home'
import BookTable from './MainContainer/BookTable';
import {  Footer } from './container';
import { Navbar } from './components';
import { Linkm, Route,Routes as  Router } from 'react-router-dom';
import './App.css'
function App() {
  return (
        <div >
            < Navbar/>
            <Router>
              <Route path='/' element={ < Home/>}/>
              <Route path='/book-table' element={ < BookTable/>}/>
            </Router>
           
            < Footer/>

        </div>
      
  );
}
export default App;
