export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <div key={btn}>
      <button type="button" onClick={onLeaveFeedback}>
        {btn}
      </button>
    </div>
  ));
};
