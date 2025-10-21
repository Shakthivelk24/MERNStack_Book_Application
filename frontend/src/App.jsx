import Home from "./Home/Home";
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
export default function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
     </Router>
   </>
  )
}