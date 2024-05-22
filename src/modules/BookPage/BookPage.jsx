import { Reviews } from '../../modules/Reviews/Reviews';
import { ListBooks } from '../../modules/BookInTheTop/ListBook/ListBooks';
import { Container } from '../../Container/Container';
import { Author } from './Author/Author';
import { Book } from './Book/Book';
import { useState } from 'react';

export const BookPage = () => {
  const [limit, setLimit] = useState(2);
  return (
    <Container>
      <section style={{ marginTop: '40px' }}>
        <Book />
        <Author />
        <Reviews
          prop="Відгуки друзів"
          isShow={false}
          textButton="Показати більше відгуків"
          limit={limit}
          setLimit={setLimit}
          variant="bookPage"
        />
        <div>
          <p>Рекомендації</p>
          <ListBooks />
        </div>
      </section>
    </Container>
  );
};
