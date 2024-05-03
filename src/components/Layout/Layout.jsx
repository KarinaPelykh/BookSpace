import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header__box';
import Footer from '../../modules/Footer/Footer';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
