import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import WorkSpace from './components/workSpace/WorkSpace';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/workspace' element={<WorkSpace/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
