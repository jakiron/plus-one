import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlusOne from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PlusOne />, document.getElementById('root'));
registerServiceWorker();
