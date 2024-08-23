import './App.css';
import './AppIndex.css';
import NavMenu from './components/NavMenu';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <Router>
      <>
        <NavMenu/>
        <div className='container'>        
          <Routes>
            <Route path="/" element={<Home title="Todo List App - 1.1.0" />}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path="*" element={
                <>
                  <h4>No page found</h4>
                </>
            }/>
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
