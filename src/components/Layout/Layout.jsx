import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header__box';
import Footer from '../../modules/Footer/Footer';
import { HomePage } from '../../pages/HomePage/HomePage';
export const Layout = () => {
  return (
    <>
      <Header />
      {/* <NavLink to="/"></NavLink>
      <main>
        <Outlet />
      </main> */}
      <HomePage />

      <Footer />
    </>
  );
};
