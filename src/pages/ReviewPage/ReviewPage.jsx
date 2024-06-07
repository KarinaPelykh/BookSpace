// import ItemBook from 'modules/ReviewBook/ReviewItemBook';
import { ReviewItemBook } from '../../modules/ReviewBook/ReviewItemBook';
import { Container } from '../../components/Container/Container';
import book from '../../images/book.jpg';
import { ReviewForm } from '../../modules/ReviewForm/ReviewForm';
import { ReviewSection } from '../../modules/ReviewForm/ReviewForm.styled';
import { Preview } from '../../modules/Preview/Preview';
import { useState } from 'react';
import avatar from '../../images/user.png';

const ReviewBook = {
  id: 0,
  images: book,
  title: 'Лев, відьма і шафа',
  author: 'К.С. Льюїс',
  rating: '5.2',
  year: '2005',
};

const User = {
  user: 'Андрій ',
  friend_id: 4,
  avatar: avatar,
  reviews: 85,
  critique: 23,
};

const ReviewPage = () => {
  const [preview, setPreview] = useState(null);

  const previewForm = obj => {
    setPreview(prev => {
      return { ...prev, ...obj };
    });
  };
  return (
    <Container>
      <ReviewSection>
        <ReviewItemBook book={ReviewBook} />
        {!preview ? (
          <ReviewForm previewForm={previewForm} />
        ) : (
          <Preview previewUser={preview} book={ReviewBook} user={User} />
        )}
      </ReviewSection>
    </Container>
  );
};

export default ReviewPage;
