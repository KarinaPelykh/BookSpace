import { DropDownCatalogUl } from './DropDownCatalog.styled';
import PropTypes from 'prop-types';
export const DropDownCatalog = ({ arr }) => {
  return (
    <DropDownCatalogUl>
      {arr.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </DropDownCatalogUl>
  );
};

DropDownCatalog.propTypes = {
  arr: PropTypes.array,
};
