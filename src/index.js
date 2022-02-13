import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './scss/index.scss';
import App from './App';
import { JsonProvider } from './context/JsonContext';

ReactDOM.render(
  <BrowserRouter>
    <JsonProvider>
      <App />
    </JsonProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
