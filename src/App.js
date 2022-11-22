import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login';
import { Nav } from './components/Nav';
import { RegisterTeacher } from './components/RegisterTeacher';
import { Students } from './components/Students'

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/students"  element={<Students/>} />
        <Route path="/registerteacher" element={<RegisterTeacher/>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
