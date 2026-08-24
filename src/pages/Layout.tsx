import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-8" >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
