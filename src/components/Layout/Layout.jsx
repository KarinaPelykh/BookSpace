import { Outlet } from 'react-router-dom';
import Header from '../Header/header';

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
