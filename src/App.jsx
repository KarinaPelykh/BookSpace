import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SharedLayout from './Layout';
import { BookPage } from './modules/BookPage/BookPage';
import HomePage from './pages/HomePage/HomePage';

import AboutAuthorPage from './pages/AboutAuthor/AboutAuthor';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="book" element={<BookPage />} />
      <Route path="login" element={<p>Login</p>} />
      <Route path="about" element={<p>about</p>} />
      <Route path="author" element={<AboutAuthorPage />} />
      <Route path="*" element={<p>about</p>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
