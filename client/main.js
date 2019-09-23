import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'),
);

// https://www.npmjs.com/package/react-hot-loader
