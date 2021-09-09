import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Main from './Main'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
