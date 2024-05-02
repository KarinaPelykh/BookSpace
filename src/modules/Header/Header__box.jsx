import { Container__header, Navigation__nav } from './Header__box.styled.js';
import { Navigation } from './Navigation.jsx';
import { NavigationSite } from './Navigation__site.jsx';

export default function Header() {
  return (
    <Container__header>
      <Navigation__nav>
        {<Navigation />}

        <NavigationSite />
      </Navigation__nav>
    </Container__header>
  );
}
