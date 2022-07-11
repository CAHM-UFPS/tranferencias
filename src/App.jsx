import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import Registro from './paginas/Registro';
import Listar from './paginas/Listar';
import MisTransferencias from './paginas/MisTransferencias';
import Recibidas from './paginas/Recibidas';

function App() {
  const [transferencias, setTransferencias]=useState(JSON.parse(localStorage.getItem('transferencias')) ?? []);

  useEffect(()=>{
    localStorage.setItem('transferencias', JSON.stringify(transferencias));
  }, [transferencias]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='registro' element={<Registro transferencias={transferencias} setTransferencias={setTransferencias}/>}/>
          <Route path='listar' element={<Listar transferencias={transferencias}/>}/>
          <Route path='mistransf' element={<MisTransferencias transferencias={transferencias}/>}/>
          <Route path='recibidas' element={<Recibidas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
