import { useReducer } from 'react';
import { FeedbackOptions, Statistics, Section, Notification } from '../';

const initialFeedbackValues = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      throw new Error();
  }
}

// Should I keep such service functions within the component file, or better to carry out to the separate files?
function countTotalFeedback(state) {
  return Object.values(state).reduce((a, b) => a + b);
}
function countPositiveFeedbackPercentage(state) {
  return Math.round((state.good / countTotalFeedback(state)) * 100);
}

export function Feedback() {
  const [state, dispatch] = useReducer(reducer, initialFeedbackValues);

  function updateFeedbackValues(e) {
    const targetElementContent = e.target.textContent;
    dispatch({ type: targetElementContent });
  }

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={state}
          onLeaveFeedback={updateFeedbackValues}
          type={'button'}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(state) ? (
          <Statistics
            options={state}
            style={{ textTransform: 'capitalize' }}
            total={countTotalFeedback(state)}
            positivePercentage={countPositiveFeedbackPercentage(state)}
          />
        ) : (
          <Notification message="There is no feedback yet"></Notification>
        )}
      </Section>
    </>
  );
}
