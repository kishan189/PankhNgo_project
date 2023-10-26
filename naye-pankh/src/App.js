
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import About from './component/About/About';
import OurCertificates from './component/List/Our-Certificates';
import NewsPaperRecognisation from './component/List/NewsPaperRecognisation';
import Donate from './component/List/Donate';
function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route exact path='/About' element={<About/>} ></Route>
        <Route exact path='/OurCertificates' element={<OurCertificates/>} ></Route>
        <Route exact path='/NewsPaperRecognisation' element={<NewsPaperRecognisation/>} ></Route>
        <Route exact path='/Donate' element={<Donate/>} ></Route>
      </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
