import DatePicker from '../DatePicker/DatePicker';
import { DateDiv, Form } from './ReviewForm.styled';

export function ReviewForm() {
  return (
    <Form>
      <label>
        <h3>Що ви думаєте про книгу?</h3>
        <p>
          Примітка: Текст ревью має складати миінімум 150 символів, не містити в
          собі нецензурної лексики та будь-якого хейту.
        </p>
        <textarea
          type="texta"
          name="aboutBook"
          placeholder="Введіть текст ревью тут..."
        ></textarea>
      </label>
      <label>
        <h3>Додайте улюблені цитати з книги (За бажанням)</h3>
        <p>
          Примітка: Додайте свої улюблені цитати з данного твору, які вам
          сподобалися і якими б ви хотіли поділитися, або просто пропустіть цей
          пункт.
        </p>
        <h4>Цитата 1:</h4>
        <select id="size" name="size">
          <option value="Цитата 1">Цитата 1</option>
          <option value="Цитата 2">Цитата 2</option>
          <option value="Цитата 3">Цитата 3</option>
          <option value="Цитата 4">Цитата 4</option>
        </select>

        <button type="button">Додати ще</button>
      </label>
      <lable>
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

        <button type="button">Додати ще одну дату</button>
      </lable>
      <lable>
        <h3>Особисті нотатки (Їх бачите лише ви)</h3>
        <textarea type="texta" name="SpecialNotes"></textarea>
        <input type="checkbox" name="roolse" value="show"></input>
      </lable>
      <div>
        <button type="button">Передперегляд</button>
        <button type="submit">Опублікувати</button>
      </div>
    </Form>
  );
}
