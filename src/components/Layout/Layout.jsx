import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header__box';
import Footer from '../../modules/Footer/Footer';
import { HomePage } from '../../pages/HomePage/HomePage';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <>
      <Header />
      {/* <NavLink to="/"></NavLink>
      <main>
        <Outlet />
      </main> */}
      {/* <HomePage /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
