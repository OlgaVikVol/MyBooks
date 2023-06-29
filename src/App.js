import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import AppRouter from './providers/router/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
