import PropTypes from 'prop-types';
import { Button } from '../';

export function FeedbackOptions({ options, onClick, type }) {
  return Object.keys(options).map(optionName => (
    <Button type={type} onClick={onClick} name={optionName} key={optionName} />
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
