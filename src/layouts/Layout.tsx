import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
  // const style = ({ isActive }: NavLinkRenderProps) => ({
  //   fontWeight: isActive ? "bold" : "normal",
  // });

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
