import PaginaPadrao from 'components/PaginaPadrao';
import Anuncie from 'pages/Anuncie';
import Carrinho from 'pages/Carrinho';
import Categoria from 'pages/Categoria';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
          <Route path='carrinho' element={<Carrinho />} />
          <Route path='anuncie/:nomeCategoria' element={<Anuncie/>} />
          <Route path='anuncie' element={<Anuncie/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}