import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import About from "../pages/about/index";
import Events from "../pages/events/index";
import Contact from "../pages/contact/index";
import TVPrograms from "../pages/tvprograms/index";
import Register from "../pages/register/index";
import Login from "../pages/login/index";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/events" element={<Events />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/tv-programs" element={<TVPrograms />} />
    {/* <Route path="/events/:id" element={<EventDetails />} />*/}
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
