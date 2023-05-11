import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Players from './players';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/players' element={< Players/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
