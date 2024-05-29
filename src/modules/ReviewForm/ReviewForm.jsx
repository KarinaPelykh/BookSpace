import DatePicker from '../DatePicker/DatePicker';
import {
  ButtonDiv,
  CheckboxLable,
  DateButton,
  DateDiv,
  Form,
  LableAbout,
  NotesTextarea,
  QuoteButton,
  QuoteSelect,
  ReviewTextArea,
} from './ReviewForm.styled';

export function ReviewForm() {
  return (
    <Form>
      <LableAbout>
        <h3>Що ви думаєте про книгу?</h3>
        <p>
          Примітка: Текст ревью має складати миінімум 150 символів, не містити в
          собі нецензурної лексики та будь-якого хейту.
        </p>
        <ReviewTextArea
          type="texta"
          name="aboutBook"
          placeholder="Введіть текст ревью тут..."
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
        <QuoteSelect id="quote" name="quote">
          <option value="Цитата 1"></option>
          <option value="Цитата 2">Цитата 1</option>
          <option value="Цитата 3">Цитата 2</option>
          <option value="Цитата 4">Цитата 3</option>
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
          <DatePicker contents={`Дата початку`} />
          <DatePicker contents={`Дата закінчення`} />
        </DateDiv>

        <DateButton type="button">Додати ще одну дату</DateButton>
      </label>
      <label>
        <h3>Особисті нотатки (Їх бачите лише ви)</h3>
        <NotesTextarea type="texta" name="SpecialNotes"></NotesTextarea>
        <CheckboxLable>
          <input type="checkbox" name="roolse" value="show" />
          <span>Показати в профілі</span>
        </CheckboxLable>
      </label>

      <ButtonDiv>
        <a href="" aria-label="show review">
          Передперегляд
        </a>

        <button type="submit">Опублікувати</button>
      </ButtonDiv>
    </Form>
  );
}
