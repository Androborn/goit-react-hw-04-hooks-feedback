import PropTypes from 'prop-types';

import { ListItem } from './Statistics.styled';

export function StatCountListItems({ options, style }) {
  return Object.keys(options).map(dataSetElement => {
    return (
      <ListItem key={dataSetElement} style={style}>
        {dataSetElement + ': ' + options[dataSetElement]}
      </ListItem>
    );
  });
}

StatCountListItems.propTypes = {
  options: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};
