import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cars from './components/Cars';
import Add from './components/Add';
import Aside from './components/Aside';
import Models from './components/Models';
function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <marquee>issa marquee...</marquee>
        <Header/></header>
      <aside><Aside/></aside>
      <main>
        <Switch>
      <Route path="/cars" component={Cars}/>
      <Route path="/add" component={Add}/>
      <Route path="/models/:id" component={Models}/>
      <Redirect exact from="/" to="/cars"/>
      </Switch>
      </main>
      <footer><Footer/></footer>
    </div>
    </Router>
  )
}

export default App;
