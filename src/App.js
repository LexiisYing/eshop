import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './login';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
              

      </Router>

    </div>
  );
}

export default App;