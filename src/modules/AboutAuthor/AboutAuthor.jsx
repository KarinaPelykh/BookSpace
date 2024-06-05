import { useState } from 'react';
import defaultImage from '../../images/author.png';
import {
  AuthorDescriptionContainer,
  AuthorPreviewContainer,
  AuthorSectionContainer,
  AuthorTitleContainer,
} from './AboutAuthor.styled';

import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton';
const AboutAuthor = ({ author }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(author);
  const openReadMore = () => {
    setReadMore(!readMore);
  };

  const shortVersion =
    author.description.length > 310
      ? author.description.slice(0, 310) + '...'
      : author.description;

  return (
    <AuthorSectionContainer>
      <AuthorPreviewContainer>
        <img
          src={author.image || defaultImage}
          alt={`${author.name} preview image`}
          width={120}
        />
        <span>{author.books} книг</span>
        <button>Підписатися</button>
      </AuthorPreviewContainer>
      <div>
        <AuthorTitleContainer>
          <h3>{author.name}</h3>
          <p>{author.fullName}</p>
        </AuthorTitleContainer>
        <AuthorDescriptionContainer>
          <h4>Про автора :</h4>
          {readMore ? (
            <p>
              {author.description}
              <ShowMoreButton
                textOpen={'Сховати'}
                textClose={'Показати повністю'}
                toggle={openReadMore}
              />
            </p>
          ) : (
            <p>
              {shortVersion}
              <ShowMoreButton
                textOpen={'Сховати'}
                textClose={'Показати повністю'}
                toggle={openReadMore}
              />
            </p>
          )}
          <ShowMoreButton
            textOpen={'Сховати'}
            textClose={'Показати повністю'}
            toggle={openReadMore}
          />
        </AuthorDescriptionContainer>
      </div>
    </AuthorSectionContainer>
  );
};

export default AboutAuthor;
