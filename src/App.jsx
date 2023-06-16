import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import MenuPublico from './componentes/MenuPublico'
import MenuPrivado from './componentes/MenuPrivado'
import Home from './componentes/Home'
import Pessoa from './componentes/telas/pessoas/Pessoa'
import Tarefa from './componentes/telas/tarefas/Tarefa'
import Login from './componentes/telas/login/Login'


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<MenuPublico />}>
        <Route index element={<Home />} />
        <Route exact="true" path='/login' element={<Login />} />
      </Route>

      <Route path='/privado' element={<MenuPrivado />}>
        <Route index element={<Home />} />
        <Route exact="true" path='pessoas' element={<Pessoa />} />
        <Route exact="true" path='tarefas' element={<Tarefa />} />
        <Route exact="true" path='login' element={<Login />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
