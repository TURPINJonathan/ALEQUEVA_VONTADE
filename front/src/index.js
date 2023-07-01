import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//? STYLES
import './sass/index.scss';

//? COMPONENTS
import Main from '@components/Main';
import Navigation from '@components/Layout/navigation';
import TranslationProvider from './TranslationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <Navigation />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Main />}
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
