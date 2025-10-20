import Home from "./Home/Home";
import Courses from "./courses/Courses";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
export default function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
      </Routes>
     </Router>
   </>
  )
}