import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/Login/login";
import Home from "./component/Home/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="home" element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
