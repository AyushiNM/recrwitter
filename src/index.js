import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' element={<Home />} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
