import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import './store.jsx';
import { Provider } from 'react-redux';
import { store }  from './store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </StrictMode>,
)
