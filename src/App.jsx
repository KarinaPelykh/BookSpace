import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SharedLayout from './Layout';
import HomePage from './pages/HomePage/HomePage';
import { BookPage } from './modules/BookPage/BookPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="book" element={<BookPage />} />
      <Route path="login" element={<p>Login</p>} />
      <Route path="about" element={<p>about</p>} />
      <Route path="*" element={<p>about</p>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
