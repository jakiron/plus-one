import React from 'react';
import ReactDOM from 'react-dom';
import PlusOne from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlusOne />, div);
  ReactDOM.unmountComponentAtNode(div);
});
