// import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Footer from '../src/modules/Footer/Footer';
import Header from '../src/modules/Header/Header__box';
const SharedLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
export default SharedLayout;
