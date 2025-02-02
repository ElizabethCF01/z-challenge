import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
