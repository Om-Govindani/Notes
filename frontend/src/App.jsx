import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />}/>
      <Route path="/login" exact element={<Login />}/>
      <Route path="/signup" exact element={<Signup />}/>
    </Routes>
  </Router>
)

function App() {
  return (
    <>
      {routes}
    </>
  )
}

export default App
