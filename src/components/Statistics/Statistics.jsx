import PropTypes from 'prop-types';

import { List, ListItem } from './Statistics.styled';
import { StatCountListItems } from './StatCountListItems';

export function Statistics({ options, style, total, positivePercentage }) {
  return (
    <List
      satisfactionrate={
        //calculated value are not allowed in pseudoelements content - this is a workaround
        (positivePercentage <= 33 && 'content: "😟"') ||
        (positivePercentage >= 66 && 'content: "😊"') ||
        'content:"😐"'
      }
    >
      <StatCountListItems options={options} style={style} />
      <ListItem>Total: {total}</ListItem>
      <ListItem>Postive feedback: {positivePercentage}%</ListItem>
    </List>
  );
}
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
