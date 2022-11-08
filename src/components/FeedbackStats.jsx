import PropTypes from "prop-types";
function FeedbackStats({ feedbacks }) {
  const total = feedbacks.length;
  let average = feedbacks.reduce((acc, item) => acc + item.rating, 0) / total;

  return (
    <div className="feedback-stats">
      <h4>{total} Reviews</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average.toFixed(2)}</h4>
      <h4>
        {feedbacks.reduce((total, item) => total + item.rating, 0)} Total
        Ratings
      </h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default FeedbackStats;
