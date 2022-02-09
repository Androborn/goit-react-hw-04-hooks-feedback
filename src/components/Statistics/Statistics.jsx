import PropTypes from 'prop-types';

import { List, ListItem } from './Statistics.styled';
import { StatCountListItems } from './StatCountListItems';

export function Statistics({ options, style, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <List
      satisfactionrate={
        //calculated value are not allowed in pseudoelements content - this is a workaround
        (positiveFeedbackPercentage <= 33 && 'content: "😟"') ||
        (positiveFeedbackPercentage >= 66 && 'content: "😊"') ||
        'content:"😐"'
      }
    >
      <StatCountListItems options={options} style={style} />
      <ListItem>Total: {totalFeedback}</ListItem>
      <ListItem>Postive feedback: {positiveFeedbackPercentage}%</ListItem>
    </List>
  );
}
Statistics.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
