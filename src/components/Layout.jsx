import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ currentUser, onLogout }) => {
  return (
    <>
        <Header currentUser={currentUser} onLogout={onLogout} />
        <main>
           <Outlet />     
        </main>
        <Footer />
    </>
  )
}

export default Layout
