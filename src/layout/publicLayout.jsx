import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] px-4">
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
