import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header__box';
import Footer from '../../modules/Footer/Footer';
import FiendReccomends from '../../modules/FriendReccomends/FiendRecommends';
import { Container } from '../Container/Container';
import { BooInTheTop } from '../../modules/BookInTheTop/BookInTheTop';
import { Reviews } from '../../modules/Reviews/Reviews';
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Container>
        <BooInTheTop />
        <Reviews />
        <FiendReccomends />
      </Container>

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
