import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'


import{Route, Routes} from "react-router-dom";
import { HeroPage , CoursePage,SigninPage,RegisterPage, AboutPage,ContactPage, ProductPage} from './Page/index';

function App() {
  return (
    <div className="App">
<Navbar/>
     
     <Routes>
       <Route path="/" element={<HeroPage />} />
       <Route path="/course" element={<CoursePage />} />
       <Route path="/signin" element={<SigninPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/product" element={<ProductPage />} />
       </Routes> 
       
 <Footer/>  
     
    </div>
  );
}

export default App;
