import { Outlet, Link } from "react-router-dom";
import { Header } from "./components/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <div className="fixed top-0  left-0 right-0 z-999999999990">
        <Header />
      </div>

      <main className="flex-grow pt-[100px]">
        <div className="w-[990px] m-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
