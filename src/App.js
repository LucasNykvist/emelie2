import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Letter from './views/Letter';
import HomeView from './views/HomeView';
import Restaurant from './views/Restaurant';
import Mystery from './views/Mystery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/brev' element={<Letter />} />
          <Route path='/restaurang' element={<Restaurant />} />
          <Route path='/blommor' element={<Mystery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
