import { useState } from 'react';
import Icons from '../../images/sprite.svg';

import {
  Navigation__box,
  Navigation__form,
  Navigation__form__input,
  Search__svg,
  Navigation__form__button__svg,
  Logo__box,
  Logo__svg,
  User__tools__ul,
  User__tools__item,
  User__svg,
  Translation__svg,
  Jingle__svg,
  Navigation__form__button,
} from './navigation.styled';
export function Navigation() {
  const [showForm, setshowForm] = useState(true);
  const [inputValue, setInputValue] = useState('');

  window.matchMedia('(min-width: 1024px)').addEventListener('change', e => {
    if (e.matches) {
      setshowForm(true);
    } else {
      setshowForm(false);
    }
  });

  function showFormToggle() {
    if (showForm === false) {
      setshowForm(true);
    } else {
      setshowForm(false);
    }
  }

  function handleValueChange(event) {
    setInputValue(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === '') {
      alert('Write something ');
      return;
    }
    setInputValue('');
    return console.log(inputValue);
  }

  return (
    <Navigation__box>
      <Search__svg
        width="16px"
        height="16px"
        aria-labelledby="search"
        onClick={showFormToggle}
      >
        <use href={Icons + '#icon-Search'}></use>
      </Search__svg>
      {showForm && (
        <Navigation__form onSubmit={handleSubmit}>
          <Navigation__form__input
            type="text"
            value={inputValue}
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Пошук книги"
            onChange={handleValueChange}
          ></Navigation__form__input>
          <Navigation__form__button type="submit">
            <Navigation__form__button__svg
              width="16px"
              height="16px"
              aria-labelledby="search"
            >
              <use href={Icons + '#icon-Search'}></use>
            </Navigation__form__button__svg>
          </Navigation__form__button>
        </Navigation__form>
      )}

      <Logo__box>
        {
          <Logo__svg
            width="121"
            height="26"
            viewBox="0 0 121 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.4365 5.22339C21.5412 5.23802 21.6402 5.28149 21.7226 5.34913C21.8107 5.4236 21.8813 5.51728 21.9293 5.62329C21.9773 5.72929 22.0014 5.84494 21.9999 5.96173V20.753C21.9999 21.0622 21.8363 21.3355 21.5864 21.4456L12.1171 25.6336C11.5095 25.8999 10.853 26 10.2062 26C8.84015 25.98 7.55641 25.5946 6.79205 24.9059C6.54902 24.6737 6.29423 24.3454 6.27464 23.8299H6.27268V23.8139C6.27268 23.8119 6.27194 23.8104 6.27121 23.8089C6.27047 23.8074 6.26974 23.8059 6.26974 23.8039L6.2717 23.7839V9.03969C6.2717 9.03969 6.26876 9.02267 6.26876 9.01266C6.27152 8.66097 6.41073 8.32476 6.65584 8.07776C6.86751 7.86255 7.11837 7.71441 7.4104 7.5943L16.8767 3.40727C16.9736 3.36478 17.08 3.35006 17.1845 3.3647C17.2889 3.37934 17.3875 3.42278 17.4696 3.49035C17.558 3.56452 17.6289 3.65815 17.6769 3.76422C17.7249 3.8703 17.7489 3.98609 17.7469 4.10294V5.74151L16.4632 5.18097L7.85334 8.98864C7.79944 9.01066 7.75044 9.03268 7.71125 9.0527C7.85527 9.15594 8.00967 9.24319 8.17182 9.31295C8.70394 9.55118 9.46732 9.72635 10.2052 9.72334C10.7344 9.72334 11.2499 9.63626 11.6614 9.45308L21.1278 5.26606C21.225 5.2235 21.3317 5.20875 21.4365 5.22339ZM15.4538 1.9899C15.6126 2.11603 15.7018 2.32623 15.7184 2.54644L6.95472 6.42417C6.51948 6.5924 6.12261 6.84994 5.78858 7.1809C5.30644 7.66536 5.03206 8.33801 5.04186 9.03868V22.5207C4.67874 22.5996 4.30869 22.6405 3.93745 22.6428C2.57042 22.6227 1.28668 22.2384 0.522315 21.5497C0.279286 21.3175 0.0244989 20.9892 0.00489987 20.4737H0.00293964V5.68246C0.00293964 5.68246 0 5.66644 0 5.65443C0.00250702 5.30289 0.14135 4.96669 0.386101 4.71953C0.598751 4.50332 0.848639 4.35618 1.14066 4.23606L10.607 0.0480369C10.7041 0.00556897 10.8106 -0.009135 10.9152 0.00549978C11.0198 0.0201346 11.1186 0.0635568 11.2009 0.131117C11.2894 0.205242 11.3604 0.29883 11.4086 0.4049C11.4568 0.51097 11.4809 0.626785 11.4792 0.743706V2.38028L10.1954 1.81974L1.58458 5.6274C1.53069 5.64942 1.48169 5.67145 1.44249 5.69146C1.5863 5.79451 1.74075 5.88111 1.90307 5.94971C2.43518 6.18894 3.19856 6.36411 3.93647 6.36211C4.46466 6.36211 4.9811 6.27403 5.39268 6.09185L14.859 1.90682C14.9562 1.86427 15.0629 1.84952 15.1677 1.86416C15.2725 1.87879 15.3714 1.92226 15.4538 1.9899ZM14.5923 17.3461L13.9687 21.0158L16.3383 17.8775L18.7079 18.2442L18.0843 15.3038L20.1757 11.8578L17.4128 13.1796L16.3383 10.6912L15.2639 14.4364L12.5009 16.3463L14.5923 17.3461Z"
              fill="#004D40"
            />
            <path
              d="M116.756 17C115.812 17 114.983 16.7924 114.27 16.3772C113.556 15.962 112.998 15.386 112.596 14.6491C112.199 13.9123 112 13.0643 112 12.1053C112 11.0702 112.196 10.1725 112.587 9.41228C112.978 8.6462 113.522 8.05263 114.218 7.63158C114.914 7.21053 115.72 7 116.635 7C117.601 7 118.421 7.23099 119.095 7.69298C119.774 8.14912 120.277 8.79532 120.605 9.63158C120.933 10.4678 121.057 11.4532 120.976 12.5877H118.913V11.8158C118.908 10.7865 118.729 10.0351 118.378 9.5614C118.027 9.08772 117.475 8.85088 116.721 8.85088C115.87 8.85088 115.237 9.11988 114.822 9.65789C114.408 10.1901 114.201 10.9708 114.201 12C114.201 12.9591 114.408 13.7018 114.822 14.2281C115.237 14.7544 115.841 15.0175 116.635 15.0175C117.147 15.0175 117.587 14.9035 117.955 14.6754C118.329 14.4415 118.617 14.1053 118.818 13.6667L120.873 14.2982C120.516 15.152 119.963 15.8158 119.215 16.2895C118.473 16.7632 117.653 17 116.756 17ZM113.545 12.5877V10.9912H119.958V12.5877H113.545Z"
              fill="#004D40"
            />
            <path
              d="M107.238 17C106.135 17 105.195 16.7836 104.416 16.3509C103.637 15.9123 103.04 15.3158 102.624 14.5614C102.215 13.807 102.007 12.9532 102 12C102.007 11.0292 102.221 10.1696 102.644 9.42105C103.073 8.66667 103.68 8.07602 104.465 7.64912C105.251 7.21637 106.185 7 107.267 7C108.482 7 109.508 7.27193 110.347 7.81579C111.191 8.3538 111.743 9.09064 112 10.0263L109.624 10.5965C109.439 10.0877 109.132 9.69298 108.703 9.41228C108.274 9.12573 107.785 8.98246 107.238 8.98246C106.617 8.98246 106.106 9.11403 105.703 9.37719C105.3 9.6345 105.003 9.99123 104.812 10.4474C104.62 10.9035 104.525 11.4211 104.525 12C104.525 12.9006 104.752 13.6287 105.208 14.1842C105.663 14.7398 106.34 15.0175 107.238 15.0175C107.871 15.0175 108.37 14.8889 108.733 14.6316C109.102 14.3743 109.38 14.0029 109.564 13.5175L112 14C111.67 14.9649 111.092 15.7076 110.267 16.2281C109.442 16.7427 108.432 17 107.238 17Z"
              fill="#004D40"
            />
            <path
              d="M96.042 17C95.3866 17 94.8319 16.8713 94.3782 16.614C93.9244 16.3509 93.5798 16.0029 93.3445 15.5702C93.1148 15.1374 93 14.6608 93 14.1404C93 13.6842 93.0728 13.2749 93.2185 12.9123C93.3641 12.5439 93.5882 12.2281 93.8908 11.9649C94.1933 11.6959 94.5854 11.4766 95.0672 11.307C95.4314 11.1842 95.8571 11.0731 96.3445 10.9737C96.8375 10.8743 97.3697 10.7836 97.9412 10.7018C98.5182 10.614 99.1204 10.5205 99.7479 10.4211L99.0252 10.8509C99.0308 10.1959 98.8908 9.71345 98.605 9.40351C98.3193 9.09357 97.8375 8.9386 97.1597 8.9386C96.7507 8.9386 96.3557 9.03801 95.9748 9.23684C95.5938 9.43567 95.3277 9.77778 95.1765 10.2632L93.3277 9.65789C93.5518 8.85672 93.9776 8.21345 94.605 7.72807C95.2381 7.24269 96.0896 7 97.1597 7C97.9664 7 98.6751 7.13743 99.2857 7.41228C99.902 7.68713 100.359 8.13743 100.655 8.76316C100.818 9.09649 100.916 9.4386 100.95 9.78947C100.983 10.1345 101 10.5117 101 10.9211V16.7368H99.2269V14.6842L99.521 15.0175C99.112 15.7018 98.6331 16.2047 98.084 16.5263C97.5406 16.8421 96.8599 17 96.042 17ZM96.4454 15.3158C96.9048 15.3158 97.2969 15.231 97.6218 15.0614C97.9468 14.8918 98.2045 14.6842 98.395 14.4386C98.591 14.193 98.7227 13.962 98.7899 13.7456C98.8964 13.4766 98.9552 13.1696 98.9664 12.8246C98.9832 12.4737 98.9916 12.1901 98.9916 11.9737L99.6134 12.1667C99.0028 12.2661 98.479 12.3538 98.042 12.4298C97.605 12.5058 97.2297 12.5789 96.916 12.6491C96.6022 12.7134 96.3249 12.7865 96.084 12.8684C95.8487 12.9561 95.6499 13.0585 95.4874 13.1754C95.3249 13.2924 95.1989 13.4269 95.1092 13.5789C95.0252 13.731 94.9832 13.9094 94.9832 14.114C94.9832 14.348 95.0392 14.5556 95.1513 14.7368C95.2633 14.9123 95.4258 15.0526 95.6387 15.1579C95.8571 15.2632 96.126 15.3158 96.4454 15.3158Z"
              fill="#004D40"
            />
            <path
              d="M86.6243 16.3208C85.6893 16.3208 84.9053 16.1164 84.2722 15.7075C83.6391 15.2987 83.1627 14.7428 82.8432 14.0396C82.5237 13.331 82.3639 12.5379 82.3639 11.6604C82.3639 10.7719 82.5237 9.9761 82.8432 9.27296C83.1627 8.56981 83.6302 8.01656 84.2456 7.61321C84.8669 7.2044 85.6331 7 86.5444 7C87.4497 7 88.2337 7.2044 88.8965 7.61321C89.5651 8.01656 90.0828 8.56981 90.4497 9.27296C90.8166 9.97065 91 10.7665 91 11.6604C91 12.5434 90.8195 13.3365 90.4586 14.0396C90.0976 14.7428 89.5888 15.2987 88.932 15.7075C88.2751 16.1164 87.5059 16.3208 86.6243 16.3208ZM82 20V7.24528H83.8905V13.4428H84.1568V20H82ZM86.2959 14.5547C86.8521 14.5547 87.3107 14.4266 87.6716 14.1704C88.0325 13.9143 88.2988 13.5681 88.4704 13.1321C88.6479 12.6906 88.7367 12.2 88.7367 11.6604C88.7367 11.1262 88.6479 10.6411 88.4704 10.205C88.2929 9.76352 88.0178 9.41467 87.645 9.15849C87.2722 8.89685 86.7988 8.76604 86.2249 8.76604C85.6805 8.76604 85.2367 8.88868 84.8935 9.13396C84.5503 9.37379 84.2959 9.71174 84.1302 10.1478C83.9704 10.5784 83.8905 11.0826 83.8905 11.6604C83.8905 12.2327 83.9704 12.7369 84.1302 13.173C84.2959 13.609 84.5533 13.9497 84.9024 14.195C85.2574 14.4348 85.7219 14.5547 86.2959 14.5547Z"
              fill="#004D40"
            />
            <path
              d="M75.6202 17C74.8036 17 74.0672 16.8654 73.4109 16.5961C72.7597 16.3269 72.2222 15.9426 71.7984 15.4433C71.3798 14.9391 71.1137 14.3418 71 13.6516L72.938 13.3725C73.1034 13.9992 73.4419 14.4838 73.9535 14.8265C74.4703 15.1691 75.0646 15.3405 75.7364 15.3405C76.1344 15.3405 76.509 15.2817 76.8605 15.1642C77.2119 15.0468 77.4961 14.8754 77.7132 14.6502C77.9354 14.425 78.0465 14.1485 78.0465 13.8205C78.0465 13.6736 78.0207 13.539 77.969 13.4166C77.9173 13.2893 77.8398 13.1767 77.7364 13.0788C77.6382 12.9809 77.509 12.8928 77.3488 12.8145C77.1938 12.7313 77.0129 12.6603 76.8062 12.6015L73.9225 11.7938C73.6744 11.7253 73.4057 11.6347 73.1163 11.5221C72.832 11.4046 72.5607 11.2455 72.3023 11.0448C72.0491 10.8392 71.8398 10.5798 71.6744 10.2664C71.5142 9.94825 71.4341 9.55662 71.4341 9.09156C71.4341 8.41111 71.615 7.8408 71.9767 7.38064C72.3437 6.91558 72.8346 6.56801 73.4496 6.33793C74.0698 6.10785 74.7571 5.99526 75.5116 6.00015C76.2765 6.00505 76.9587 6.12988 77.5581 6.37465C78.1576 6.61452 78.6589 6.96454 79.062 7.4247C79.4651 7.88486 79.7494 8.44048 79.9147 9.09156L77.907 9.422C77.8243 9.04995 77.6641 8.7342 77.4264 8.47475C77.1938 8.2104 76.907 8.00969 76.5659 7.87262C76.23 7.73555 75.8708 7.66212 75.4884 7.65233C75.1163 7.64744 74.77 7.70129 74.4496 7.81388C74.1344 7.92158 73.8786 8.07823 73.6822 8.28383C73.491 8.48944 73.3953 8.72931 73.3953 9.00345C73.3953 9.2629 73.478 9.47585 73.6434 9.64229C73.8088 9.80384 74.0129 9.93357 74.2558 10.0315C74.5039 10.1245 74.7545 10.2028 75.0077 10.2664L77.0077 10.7951C77.2817 10.8637 77.5891 10.9567 77.9302 11.0742C78.2713 11.1917 78.5995 11.3557 78.9147 11.5662C79.23 11.7767 79.4884 12.0533 79.6899 12.3959C79.8966 12.7386 80 13.1743 80 13.703C80 14.2513 79.8785 14.7335 79.6357 15.1496C79.3979 15.5608 79.0749 15.9034 78.6667 16.1776C78.2584 16.4517 77.7907 16.6573 77.2636 16.7944C76.7416 16.9315 76.1938 17 75.6202 17Z"
              fill="#004D40"
            />
            <path
              d="M61 17L61.0205 6H63.5153V12.7222L67.5542 8.75H70.6319L66.3476 12.875L71 17H67.7382L63.5153 13.0278V17H61Z"
              fill="#004D40"
            />
            <path
              d="M54.9907 17C53.987 17 53.1103 16.7865 52.3606 16.3596C51.6109 15.9327 51.0285 15.345 50.6134 14.5965C50.2045 13.8421 50 12.9766 50 12C50 11.0058 50.2107 10.1345 50.632 9.38596C51.0533 8.63743 51.6388 8.05263 52.3885 7.63158C53.1382 7.21053 54.0056 7 54.9907 7C56.0006 7 56.8804 7.21345 57.6301 7.64035C58.3798 8.06725 58.9622 8.65789 59.3773 9.41228C59.7924 10.1608 60 11.0234 60 12C60 12.9825 59.7893 13.8509 59.368 14.6053C58.9529 15.3538 58.3705 15.9415 57.6208 16.3684C56.8711 16.7895 55.9944 17 54.9907 17ZM54.9907 15.0175C55.8829 15.0175 56.5458 14.7368 56.9796 14.1754C57.4133 13.614 57.6301 12.8889 57.6301 12C57.6301 11.0819 57.4102 10.3509 56.9703 9.80702C56.5304 9.25731 55.8705 8.98246 54.9907 8.98246C54.3897 8.98246 53.8941 9.11111 53.5037 9.36842C53.1196 9.61988 52.8346 9.97368 52.6487 10.4298C52.4628 10.8801 52.3699 11.4035 52.3699 12C52.3699 12.9181 52.5898 13.652 53.0297 14.2018C53.4758 14.7456 54.1295 15.0175 54.9907 15.0175Z"
              fill="#004D40"
            />
            <path
              d="M43.9907 17C42.987 17 42.1103 16.7865 41.3606 16.3596C40.6109 15.9327 40.0285 15.345 39.6134 14.5965C39.2045 13.8421 39 12.9766 39 12C39 11.0058 39.2107 10.1345 39.632 9.38596C40.0533 8.63743 40.6388 8.05263 41.3885 7.63158C42.1382 7.21053 43.0056 7 43.9907 7C45.0006 7 45.8804 7.21345 46.6301 7.64035C47.3798 8.06725 47.9622 8.65789 48.3773 9.41228C48.7924 10.1608 49 11.0234 49 12C49 12.9825 48.7893 13.8509 48.368 14.6053C47.9529 15.3538 47.3705 15.9415 46.6208 16.3684C45.8711 16.7895 44.9944 17 43.9907 17ZM43.9907 15.0175C44.8829 15.0175 45.5458 14.7368 45.9796 14.1754C46.4133 13.614 46.6301 12.8889 46.6301 12C46.6301 11.0819 46.4102 10.3509 45.9703 9.80702C45.5304 9.25731 44.8705 8.98246 43.9907 8.98246C43.3897 8.98246 42.8941 9.11111 42.5037 9.36842C42.1196 9.61988 41.8346 9.97368 41.6487 10.4298C41.4628 10.8801 41.3699 11.4035 41.3699 12C41.3699 12.9181 41.5898 13.652 42.0297 14.2018C42.4758 14.7456 43.1295 15.0175 43.9907 15.0175Z"
              fill="#004D40"
            />
            <path
              d="M30 17V6H34.839C35.6638 6 36.339 6.15023 36.8644 6.45069C37.3955 6.74606 37.7881 7.12546 38.0424 7.58889C38.3023 8.05231 38.4322 8.53102 38.4322 9.025C38.4322 9.63102 38.2712 10.1454 37.9492 10.5681C37.6328 10.9907 37.2006 11.2759 36.6525 11.4236V11.0417C37.4209 11.1995 38.0028 11.528 38.3983 12.0271C38.7994 12.5262 39 13.094 39 13.7306C39 14.3824 38.8616 14.9528 38.5847 15.4417C38.3079 15.9306 37.8955 16.3125 37.3475 16.5875C36.8051 16.8625 36.1328 17 35.3305 17H30ZM32.0678 15.266H35.0763C35.4322 15.266 35.7514 15.2023 36.0339 15.075C36.3164 14.9426 36.5367 14.7593 36.6949 14.525C36.8588 14.2856 36.9407 14.003 36.9407 13.6771C36.9407 13.3817 36.8701 13.1169 36.7288 12.8826C36.5876 12.6484 36.3814 12.4625 36.1102 12.325C35.839 12.1824 35.5141 12.1111 35.1356 12.1111H32.0678V15.266ZM32.0678 10.3924H34.8136C35.1073 10.3924 35.3701 10.3414 35.6017 10.2396C35.8333 10.1377 36.0169 9.9875 36.1525 9.78889C36.2881 9.59028 36.3559 9.34583 36.3559 9.05556C36.3559 8.67361 36.2203 8.35532 35.9492 8.10069C35.678 7.84606 35.2994 7.71875 34.8136 7.71875H32.0678V10.3924Z"
              fill="#004D40"
            />
          </Logo__svg>
        }
      </Logo__box>
      <User__tools__ul>
        <User__tools__item>
          <Jingle__svg width="16px" height="16px" aria-labelledby="jingle">
            <use href={Icons + '#icon-jingle'}></use>
          </Jingle__svg>
        </User__tools__item>
        <User__tools__item>
          <Translation__svg
            width="24px"
            height="24px"
            aria-labelledby="translation"
          >
            <use href={Icons + '#icon-translation'}></use>
          </Translation__svg>
          UA
        </User__tools__item>
        <User__tools__item>
          <User__svg width="16px" height="16px" aria-labelledby="user">
            <use href={Icons + '#icon-user'}></use>
          </User__svg>
        </User__tools__item>
      </User__tools__ul>
    </Navigation__box>
  );
}
