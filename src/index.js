import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const text = 'Привіт Іван'

const elem = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <input type='text' />
    <label htmlFor=""></label>
    <button tabIndex="0">Click</button>
  </div>
)

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
); 

