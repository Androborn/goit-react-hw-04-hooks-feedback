import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';

export function Statistics({
  options,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <List
      satisfactionrate={
        //calculated value are not allowed in pseudoelements content - this is a workaround
        (positiveFeedbackPercentage <= 33 && 'content: "😟"') ||
        (positiveFeedbackPercentage >= 66 && 'content: "😊"') ||
        'content:"😐"'
      }
    >
      {Object.keys(options).map(optionName => {
        return (
          <ListItem key={optionName}>
            {optionName + ': ' + options[optionName]}
          </ListItem>
        );
      })}
      <ListItem>Total: {totalFeedback}</ListItem>
      <ListItem>Postive feedback: {positiveFeedbackPercentage}%</ListItem>
    </List>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
