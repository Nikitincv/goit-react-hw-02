import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("reviews");
    return savedReviews
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const resetReviews = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  const updateFeedback = (feedbackType) => {
    setReviews((prevReviews) => {
      const updatedReviews = {
        ...prevReviews,
        [feedbackType]: prevReviews[feedbackType] + 1,
      };
      return updatedReviews;
    });
  };
  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const partPos = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={resetReviews}
        resetBtn={totalFeedback !== 0}
      />
      {totalFeedback ? (
        <Feedback
          reviews={reviews}
          partPos={partPos}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification message="No feedback yet"></Notification>
      )}
    </>
  );
}

export default App;
