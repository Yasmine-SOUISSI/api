import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './Pages/SignUp';
import LogIn from './Pages/Login';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <>
      Navbar
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<>About</>} />
        <Route path="*" element={<>Not Found</>} />

      </Routes>
      Footer
    </>
  );
}

export default App;
