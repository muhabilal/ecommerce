import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Accounts/LogIn';
import Register from './Accounts/Register';
import Home from './Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aboutus from './Home/About/Aboutus';
import Contactus from './Home/Contact/Contactus';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<LogIn />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Contactus' element={<Contactus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
