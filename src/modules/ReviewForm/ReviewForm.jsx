import { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import PropTypes from 'prop-types';
import {
  ButtonDiv,
  CheckboxLable,
  DateButton,
  DateDiv,
  Form,
  LableAbout,
  NotesTextarea,
  PublickButton,
  QuoteButton,
  QuoteSelect,
  ReviewTextArea,
} from './ReviewForm.styled';

export function ReviewForm({ previewForm }) {
  const [description, setDescription] = useState('');
  const [quote, setQuote] = useState([]);
  const [specialNotes, setSpecialNotes] = useState('');
  const [dateBegine, setDateBegine] = useState({});
  const [dateEnd, setDateEnd] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  const handleChange = event => {
    const { name, value, checked } = event.target;
    switch (name) {
      case 'aboutBook':
        setDescription(value);
        break;
      case 'quote':
        setQuote(prev => [...prev, value]);
        break;
      case 'specialNotes':
        setSpecialNotes(value);
        break;
      case 'showProfile':
        setShowProfile(checked);
        break;

      default:
        break;
    }
  };

  const dateSubmit = (name, value, contents) => {
    if (contents === `Дата початку`) {
      setDateBegine(prev => {
        return { ...prev, [name]: value };
      });
    } else {
      setDateEnd(prev => {
        return { ...prev, [name]: value };
      });
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const UserReview = {
      description,
      quote,
      specialNotes,
      dateBegine,
      dateEnd,
      showProfile,
    };
    console.log(UserReview);
    previewForm(UserReview);
  };
  return (
    <Form onSubmit={onSubmit}>
      <LableAbout>
        <h3>Що ви думаєте про книгу?</h3>
        <p>
          Примітка: Текст ревью має складати миінімум 150 символів, не містити в
          собі нецензурної лексики та будь-якого хейту.
        </p>
        <ReviewTextArea
          type="texta"
          name="aboutBook"
          value={description}
          placeholder="Введіть текст ревью тут..."
          minLength="150"
          required
          onChange={handleChange}
        ></ReviewTextArea>
      </LableAbout>
      <label>
        <h3>Додайте улюблені цитати з книги (За бажанням)</h3>
        <p>
          Примітка: Додайте свої улюблені цитати з данного твору, які вам
          сподобалися і якими б ви хотіли поділитися, або просто пропустіть цей
          пункт.
        </p>
        <h3 style={{ marginTop: `18px` }}>Цитата 1:</h3>
        <QuoteSelect id="quote" name="quote" onChange={handleChange}>
          <option></option>
          <option value="Цитата 1">Цитата 1</option>
          <option value="Цитата 2">Цитата 2</option>
          <option value="Цитата 3">Цитата 3</option>
        </QuoteSelect>

        <QuoteButton type="button">Додати ще</QuoteButton>
      </label>
      <label>
        <h3>Дати читання (За бажанням)</h3>
        <p>
          Примітка: Оберіть дату початку та закінчення читання данного твору або
          пропустіть данний пункт. Якщо ви повернулись і перечитали данний твір
          ще раз ви можете додати ще одну дату нижче.
        </p>
        <DateDiv>
          <DatePicker contents={`Дата початку`} dateSubmit={dateSubmit} />
          <DatePicker contents={`Дата закінчення`} dateSubmit={dateSubmit} />
        </DateDiv>

        <DateButton type="button">Додати ще одну дату</DateButton>
      </label>
      <label>
        <h3>Особисті нотатки (Їх бачите лише ви)</h3>
        <NotesTextarea
          type="texta"
          name="specialNotes"
          value={specialNotes}
          onChange={handleChange}
        ></NotesTextarea>
        <CheckboxLable>
          <input
            type="checkbox"
            name="showProfile"
            value="yes"
            onChange={handleChange}
          />
          <span>Показати в профілі</span>
        </CheckboxLable>
      </label>

      <ButtonDiv>
        <button type="submit">Передперегляд</button>

        <PublickButton>Опублікувати</PublickButton>
      </ButtonDiv>
    </Form>
  );
}

ReviewForm.propTypes = {
  previewForm: PropTypes.func,
};
