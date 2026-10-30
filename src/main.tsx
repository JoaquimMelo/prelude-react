import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/global.css';

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>


      <App />
    </BrowserRouter>
  </StrictMode>,
)

/*Aqui eu vou colocar tudo que eu quiser importar, colocar rotas de página pra página*/
