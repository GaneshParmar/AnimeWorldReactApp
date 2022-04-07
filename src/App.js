import './App.css';
import Header from './Components/header';
import Footer from './Components/Footer';
import MaineContent from './Components/MaineContent';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import AnimeInfo from './Components/AnimeInfo';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
                <Route path="/" element={<MaineContent />}/>
        </Routes>
        <Routes>
                <Route path="/animeinfo" element={<AnimeInfo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
