// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Login'
import Messages from './components/Messages'

function App() {
  return (
    <>
      <div>
        {/* {props.location.pathname !== '/' && <Nav {...props} /> */}
        <Nav />
        <Routes>
          <Route exact path='/' component={Login} />

          <Route exact path='/messages' component={Messages} />
        </Routes>
      </div>
    </>
  )
}

export default App
