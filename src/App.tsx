import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home.tsx';
import Herois from './pages/Herois/herois.tsx';
import Viloes from './pages/Viloes/viloes.tsx';



export default function App() {

  return  (

    
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/herois' element={<Herois/>}/>
      <Route path='/viloes' element={<Viloes/>}/>
      
    
    </Routes>
  
    

  );
}

  /*Aqui eu vou colocar tudo que eu quiser renderizar*/