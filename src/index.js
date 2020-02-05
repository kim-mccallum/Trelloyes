import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import STORE from './store';

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));
