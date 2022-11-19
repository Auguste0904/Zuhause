import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Concept from './Components/Concept';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Devis from './Components/Devis';
import Contact from './Components/Contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Routing = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Concept />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Devis" element={<Devis />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
