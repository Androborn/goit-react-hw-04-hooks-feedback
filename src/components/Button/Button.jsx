import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export function Button({ type, onClick, name }) {
  return (
    <Btn type={type} onClick={onClick}>
      {name}
    </Btn>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
