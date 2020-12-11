import './styles/App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import About from './components/Pages/About'
import MedicalPrescription from './components/Pages/MedicalPrescription'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <Header /> */}
        <Route  path='/' component={Header}/>
        <Route exact path='/' component={About}/>
        <Route exact path='/about' component={About}/> 
        <Route exact path='/medical-prescription' component={MedicalPrescription}/>
        <Route  path='/' component={Footer}/>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
