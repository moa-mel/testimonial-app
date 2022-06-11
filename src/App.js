import './App.css';
import Home from "./pages/Home"
import Testimony from "./pages/Testimony"
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Shared from "./pages/Shared"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
