import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header__box';
import Footer from '../../modules/Footer/Footer';
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
