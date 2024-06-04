// import { Suspense } from "react";
import { Link, Outlet } from 'react-router-dom';
import Footer from '../src/modules/Footer/Footer';
import Header from '../src/modules/Header/Header__box';
const SharedLayout = () => {
  return (
    <>
      <Link to="/book">Book Page</Link>
      <Link to="/author">About Author Page</Link>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
export default SharedLayout;
