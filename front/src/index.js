import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TranslationProvider from './TranslationProvider';

//? STYLES
import './sass/index.scss';

//? COMPONENTS
import Main from '@components/Main';
import Navigation from '@components/Layout/navigation';
import About from '@components/About';
import Galery from '@components/Galery';
import Boat from '@components/Boat';
import Tour from '@components/Tour';
import Eat from '@components/Eat';
import Activities from '@components/Activities';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={<Main />}
            exact
          />
          <Route
            path='/about'
            element={<About />}
            exact
          />
          <Route
            path='/galery'
            element={<Galery />}
            exact
          />
          <Route
            path='/boat'
            element={<Boat />}
            exact
          />
          <Route
            path='/tour'
            element={<Tour />}
            exact
          />
          <Route
            path='/eat'
            element={<Eat />}
            exact
          />
          <Route
            path='/activities'
            element={<Activities />}
            exact
          />
        </Routes>
      </Router>
    </TranslationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
