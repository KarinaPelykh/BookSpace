import defaultImage from '../../../images/friend.png';
import icon from '../../../images/sprite.svg';
import {
  AboutAuthor,
  AmountBook,
  BookCalled,
  Button,
  ButtonShow,
  DescriptionAboutAuthor,
  Div,
  EmptySpan,
  Images,
  Section,
  UserWrapp,
} from './Author.styled';
export const Author = () => {
  return (
    <Section>
      <AboutAuthor>Про автора</AboutAuthor>
      <Div>
        <UserWrapp>
          <Images src={defaultImage} alt="author" />
          <BookCalled>К. Стейплз Льюїс</BookCalled>
          <AmountBook>34 книги</AmountBook>
          <Button>Підписатися</Button>
        </UserWrapp>

        <div>
          <DescriptionAboutAuthor>
            Клайв Стейплз Льюїс був одним з інтелектуальних гігантів ХХ століття
            і, можливо, одним з найвпливовіших письменників свого часу. Він був
            науковим співробітником і викладачем англійської літератури в
            Оксфордському університеті до 1954 року. Був одноголосно обраний на
            кафедру середньовічної та ренесансної літератури Кембриджського
            університету, яку обіймав до виходу на пенсію. Він написав понад
            тридцять книг, що дозволило йому охопити широку аудиторію, і його
            твори продовжують приваблювати тисячі нових читачів щороку. Серед
            його найвідоміших і найпопулярніших творів - &quot; Просте
            християнство&quot;, &quot;З мовчазної планети&quot;, &quot;Велике
            розлучення&quot;, &quot;Листи на магнітній стрічці&quot; та
            загальновизнана класика &quot;Хроніки Нарнії&quot;. На сьогоднішній
            день книги про Нарнію продані накладом понад 100 мільйонів
            примірників і були екранізовані в трьох великих кінофільмах.
            <EmptySpan></EmptySpan>
            Льюїс був одружений з поетесою Джой Девідман.В. Г. Льюїс був його
            старшим братомю
          </DescriptionAboutAuthor>
          <ButtonShow>
            Сховати
            <svg width="24px" height="24px">
              <use xlinkHref={icon + '#icon-down'}></use>
            </svg>
          </ButtonShow>
        </div>
      </Div>
    </Section>
  );
};
