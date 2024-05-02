import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../../modules/Footer/Footer';
import FiendReccomends from '../../modules/FriendReccomends/FiendRecommends';


// import FiendReccomends from '../../modules/FriendReccomends/FiendReccomends';
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <FiendReccomends />
      <Footer />
      {/* header */}
      {/*


<main>
<container>
<outlet/>
</container>
</main>


*/}
      {/*footer */}
    </>
  );
};
