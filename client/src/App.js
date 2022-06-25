import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OneProduct from './components/OneProduct';
import Main from './views/Main';
import Update from './components/Update';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          
    
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/product/:id" element={<OneProduct/>} />
            <Route path ="/product/update/:id" element={<Update/>} />

          </Routes>
        </div>
      </BrowserRouter>
      
      


  );
}

export default App;
