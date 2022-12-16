import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Accounts/LogIn';
import Register from './Accounts/Register';
import Home from './Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aboutus from './Home/About/Aboutus';
import Contactus from './Home/Contact/Contactus';
import WinterMen from './Home/MenFashion/WinterMen';
import SummerMen from './Home/MenFashion/SummerMen';
import KurtaMen from './Home/MenFashion/KurtaMen';
import Winter from './Home/WomenFashion/Winter';
import Summer from './Home/WomenFashion/Summer';
import SummerKids from './Home/KidsFashion/SummerKids';
import WinterKids from './Home/KidsFashion/WinterKids';
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
          <Route path='/WinterMen' element={<WinterMen />} />
          <Route path='/SummerMen' element={<SummerMen />} />
          <Route path='/KurtaMen' element={<KurtaMen />} />
          <Route path='/Winter' element={<Winter />} />
          <Route path='/Summer' element={<Summer />} />
          <Route path='/SummerKids' element={<SummerKids />} />
          <Route path='/WinterKids' element={<WinterKids />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
