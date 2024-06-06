import { User } from '../../modules/Reviews/User/User';
import { PreviewBookItem } from './PreviewBookItem';

import PropTypes from 'prop-types';

import { ButtonDiv, PreviewBox, UserDiv } from './Preview.styled';
import { DescriptionPreview } from './DescriptionPreview';

export function Preview({ previewUser, book }) {
  const {
    user,
    avatar,
    reviews,
    critique,
    description,
    index,
    variant,
    quote,
    dateBegine,
    dateEnd,
  } = previewUser;

  const { id, images, title, author, rating } = book;

  return (
    <PreviewBox>
      <UserDiv>
        <User
          variant={variant}
          user={user}
          images={avatar}
          reviews={reviews}
          critique={critique}
        />
      </UserDiv>

      <DescriptionPreview
        description={description}
        quote={quote}
        index={index}
        variant={variant}
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
};
