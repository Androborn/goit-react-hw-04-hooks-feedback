import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children ? children : null}
    </Wrapper>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
