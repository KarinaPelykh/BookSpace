import PropTypes from 'prop-types';
export const Container = ({ children }) => {
  return <Container>{children}</Container>;
};
Container.propTypes = {
  children: PropTypes.element,
};
