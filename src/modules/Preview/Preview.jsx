// import { User } from '../../modules/Reviews/User/User';
import { PreviewBookItem } from './PreviewBookItem';

import PropTypes from 'prop-types';

import {
  ButtonDiv,
  PreviewBox,
  UserDiv,
  UserWrapp,
  BookCalled,
  AmountBook,
  Images,
  Button,
} from './Preview.styled';
import { DescriptionPreview } from './DescriptionPreview';

export function Preview({ previewUser, book, user }) {
  const { description, quote, dateBegine, dateEnd } = previewUser;
  const { name, avatar, critique } = user;

  const { id, images, title, author, rating } = book;

  return (
    <PreviewBox>
      <UserDiv>
        <UserWrapp>
          <Images src={avatar} alt="author" />
          <BookCalled>{name}</BookCalled>
          <AmountBook>{critique} відгуки</AmountBook>
          <Button>Підписатися</Button>
        </UserWrapp>
      </UserDiv>

      <DescriptionPreview
        description={description}
        quote={quote}
        dateBegine={dateBegine}
        dateEnd={dateEnd}
      />

      <PreviewBookItem
        key={id}
        images={images}
        title={title}
        author={author}
        rating={rating}
      />
      <ButtonDiv>
        <lable>
          <input type="checkbox" name="showProfile" value="yes" />
          <span>Показати в профілі</span>
        </lable>
        <button type="submit">Опублікувати</button>
      </ButtonDiv>
    </PreviewBox>
  );
}

Preview.propTypes = {
  previewUser: PropTypes.object,
  book: PropTypes.object,
  user: PropTypes.object,
};
