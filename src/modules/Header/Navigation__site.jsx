import { useState } from 'react';
import Icons from '../../images/sprite.svg';
import { DropDownCatalog } from './DropDownCatalog';

import {
  Navigation__site__ul,
  Navigation__site__item,
  Navigation__site__item__button,
  Icon_down_svg,
  Plas__svg,
} from './navigation__site.styled.js';

const catalog = [
  'Жанри',
  'Детектив',
  'Криміналістика',
  'Трилер',
  'Психологія',
  'Підліткова література',
  'Всі жанри',
  'Рецензії',
  'Топ рецензій',
  'Нові рецензії',
];
export function NavigationSite() {
  const [catalogDrop, setCatalogDrop] = useState(false);

  const toggleCatalogDrop = () => {
    setCatalogDrop(prev => !prev);
  };
  return (
    <Navigation__site__ul>
      <Navigation__site__item>
        <Navigation__site__item__button>
          Мої книги
        </Navigation__site__item__button>
      </Navigation__site__item>
      <Navigation__site__item>
        <Navigation__site__item__button onClick={toggleCatalogDrop}>
          Каталог
          <Icon_down_svg width="24px" height="24px" aria-labelledby="down">
            <use href={Icons + '#icon-down'}></use>
          </Icon_down_svg>
        </Navigation__site__item__button>
        {catalogDrop ? <DropDownCatalog arr={catalog} /> : <></>}
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
