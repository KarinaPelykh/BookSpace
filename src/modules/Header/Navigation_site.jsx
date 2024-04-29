import Icons from '../../images/sprite.svg';

import {
  Navigation__site__ul,
  Navigation__site__item,
  Navigation__site__item__button,
  Icon_down_svg,
  Plas__svg,
} from './navigation_site.styled.js';

export function NavigationSite() {
  return (
    <Navigation__site__ul>
      <Navigation__site__item>
        <Navigation__site__item__button>
          Мої книги
        </Navigation__site__item__button>
      </Navigation__site__item>
      <Navigation__site__item>
        <Navigation__site__item__button>
          Каталог
          <Icon_down_svg width="24px" height="24px" aria-labelledby="down">
            <use href={Icons + '#icon-down'}></use>
          </Icon_down_svg>
        </Navigation__site__item__button>
      </Navigation__site__item>
      <Navigation__site__item>
        <Navigation__site__item__button>
          Додати книгу
          <Plas__svg width="24px" height="24px" aria-labelledby="plas">
            <use href={Icons + '#icon-Plas'}></use>
          </Plas__svg>
        </Navigation__site__item__button>
      </Navigation__site__item>
    </Navigation__site__ul>
  );
}
