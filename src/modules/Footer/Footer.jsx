import {
  FooterContainer,
  FooterSectionContainer,
  FooterSvgContainer,
} from "./Footer.styled";
import icon from "../../images/sprite.svg";
export default function Footer() {
  console.log("rendeer footer");
  return (
    <FooterSectionContainer>
      <FooterContainer>
        <div>
          <h3>Проєкт</h3>
          <ul>
            <li>
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Умови</a>
            </li>
            <li>
              <a href="#">Приватність</a>
            </li>
            <li>
              <a href="#">Допомога</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Наші контакти </h3>
          <ul>
            <li>
              <a href="#">Автори</a>
            </li>
            <li>
              <a href="#">Реклама</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Слідкуй за нами </h3>
          <FooterSvgContainer>
            <li>
              <a href="#">
                <svg width="24px" height="24px" alt="facebook-link">
                  <use xlinkHref={icon + "#icon-Facebook"}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="24px" height="24px" alt="twitter-link">
                  <use xlinkHref={icon + "#icon-twitter"}></use>
                </svg>
              </a>
            </li>
          </FooterSvgContainer>
        </div>
      </FooterContainer>
    </FooterSectionContainer>
  );
}
