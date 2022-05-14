import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Pages/Shared/Header/Header";
import SignUp from './Pages/SignUp/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<RequireAuth><Appointment></Appointment></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route index path='/dashboard/review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
