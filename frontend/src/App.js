import './App.css';
import { TopBar } from './Components/TopBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { AboutPage } from './pages/AboutPage';
import { DashboardPage } from './pages/DashboardPage';
import { AccountPage } from './pages/AccountPage';
import { CourseDetails } from './pages/CourseDetails';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopBar/>
    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/coursedetails/:name" element={<CourseDetails />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
