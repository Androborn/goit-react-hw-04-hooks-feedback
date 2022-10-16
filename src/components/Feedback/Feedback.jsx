import { useReducer } from 'react';
import { FeedbackOptions, Statistics, Section, Notification } from '../';
import { countTotal, countRatio } from '../../services';

const initialFeedbackValues = { good: 0, neutral: 0, bad: 0 };
const feedbackRatioValue = 'good';

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      throw new Error('State reducer error');
  }
}

export function Feedback() {
  const [state, dispatch] = useReducer(reducer, initialFeedbackValues);
  const feedbackAvailable = countTotal(state);

  function updateFeedbackValues(e) {
    const targetElementContent = e.target.textContent;
    dispatch({ type: targetElementContent });
  }

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={state}
          onClick={updateFeedbackValues}
          type={'button'}
        />
      </Section>
      <Section title="Statistics">
        {feedbackAvailable ? (
          <Statistics
            options={state}
            totalFeedback={countTotal(state)}
            positiveFeedbackPercentage={countRatio(state, feedbackRatioValue)}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </>
  );
}
