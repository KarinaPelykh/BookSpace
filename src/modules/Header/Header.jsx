import { Container__header, Navigation__nav } from './header.styled';
import { Navigation } from './Navigation';
import { NavigationSite } from './Navigation_site';

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
