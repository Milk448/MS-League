import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/publicLayout";
import MemberLayout from "../layout/memberLayout";

import Dashboard from "../pages/member-dashboard/dashboard";
import Courses from "../pages/member-courses/courses";
import CourseDetail from "../pages/member-courses/coursedetail";
import MemberTVPrograms from "../pages/member-tvprograms/tvprograms";
import Forum from "../pages/member-forum/forum";
import ForumTopic from "../pages/member-forum/forumtopic";
import Profile from "../pages/member-profile/profile";

import Home from "../pages/home";
import About from "../pages/about";
import Events from "../pages/events";
import Contact from "../pages/contact";
import TVPrograms from "../pages/tvprograms";
import Register from "../pages/register";
import Login from "../pages/login";

const AppRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tv-programs" element={<TVPrograms />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Route>
    <Route element={<MemberLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/learning" element={<Courses />} />
      <Route path="/learning/:id" element={<CourseDetail />} />
      <Route path="/tvprograms" element={<MemberTVPrograms />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum/:id" element={<ForumTopic />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  </Routes>
);

export default AppRoutes;
