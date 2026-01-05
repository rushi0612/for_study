import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";
import Master from "./Master";
import AdminAbout from "./adminmodule/AdminAbout";
import AdminMain from "./adminmodule/AdminMain";
import AdminMaster from "./adminmodule/AdminMaster";
import UserMaster from "./usermodule/UserMaster";
import Profile from "./usermodule/Profile";
import Orders from "./usermodule/Order";
import History from "./usermodule/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} >
        <Route index element= {<Main/>} />
        <Route path="/about" element= {<About />} />
        <Route path="/Services" element= {<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        </Route>
        <Route path="/admin" element={<AdminMaster />} >
        <Route index element= {<AdminMain/>} />
        <Route path="/admin/about" element= {<AdminAbout />} />
        </Route>

        <Route path="/user" element={<UserMaster />}>
        <Route index element={<Profile />} />
        <Route path="/user/orders" element={<Orders />} />
        <Route path="/user/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
