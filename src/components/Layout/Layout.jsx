import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header__box';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
