import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//         <button type="button" onClick={() => onLeaveFeedback(options)}>Good</button>
//         <button type="button" onClick={() => onLeaveFeedback(options)}>Neutral</button>
//         <button type="button" onClick={() => onLeaveFeedback(options)}>Bad</button>
//     </div>
//   );
// };

export default FeedbackOptions;