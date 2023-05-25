
import './App.css';
import Header from './Component/Header';
import CardsDetail from './Component/CardsDetail';
import Cards from './Component/Cards';


import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
