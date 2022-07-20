import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/about/About';



function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Routers>);
}

export default App;
