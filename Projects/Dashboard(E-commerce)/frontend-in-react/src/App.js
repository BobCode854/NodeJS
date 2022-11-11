import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar></Navbar>
     <Footer></Footer> {/** we can place footer here If Routing is there in footer 
                             else we can place it after browserRouter also */}
     </BrowserRouter>
     
    </div>
  );
}

export default App;
