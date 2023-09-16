import {Route, Routes} from 'react-router-dom';
// import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {

  return (
    <>
      <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/dashboard/:id' element={<Dashboard/>} />

      </Routes>
    </>
  )
}

export default App
