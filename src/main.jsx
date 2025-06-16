import { StrictMode }    from 'react'
import { createRoot }    from 'react-dom/client'
import ReactDom          from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';
import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>  
  // </StrictMode>
);
