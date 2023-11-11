import './App.css';
import { TopBar } from './Components/TopBar';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { AboutPage } from './pages/AboutPage';
import { DashboardPage } from './pages/DashboardPage';
import { AccountPage } from './pages/AccountPage';
import { CourseDetails } from './pages/CourseDetails';
import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const handleLogIn = ()=>{
    setIsLoggedIn(true)
  }
  const handleReg = ()=>{
    setIsReg(true)
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <TopBar/>
    </div>
    <Routes>
      <Route path="/" element={isLoggedIn ?  <HomePage /> : <Navigate to='/Login'/>} />
      <Route path="/courses" element={isLoggedIn ?  <CoursePage /> : <Navigate to='/Login'/>} />
      <Route path="/about" element={isLoggedIn ?  <AboutPage /> : <Navigate to='/Login'/>} />
      <Route path="/dashboard" element={isLoggedIn ?  <DashboardPage /> : <Navigate to='/Login'/>} />
      <Route path="/account" element={isLoggedIn ?  <AccountPage /> : <Navigate to='/Login'/>} />
      <Route path="/Login" element={isReg ? <LoginPage onLogin={handleLogIn}/> : <Navigate to='/Register'/>} />
      <Route path="/Register" element={<RegisterPage onReg={handleReg} />} />
      <Route path="/coursedetails/:name" element={isLoggedIn ?  <CourseDetails /> : <Navigate to='/Login'/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
