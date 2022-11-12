import { createContext, useState } from "react";

const FeedbackContext = createContext();

function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleAdd = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  const handleDelete = (id) => {
    const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(newFeedbacks);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, handleAdd, handleDelete }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
