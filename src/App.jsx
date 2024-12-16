import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'

function App() {
  const [reviews, setReviews] = useState(() =>{ 
  const savedReviews = window.localStorage.getItem('reviews')
    return savedReviews
    ? JSON.parse(savedReviews)
    : { good: 0, neutral: 0, bad: 0 };
});

const resetReviews =() => {
  const initReviews = {good: 0, neutral: 0, bad: 0 };
  setReviews(initReviews);
  window.localStorage.setItem("reviews", JSON.stringify(initReviews));
}

const updateFeedback =(feedbackType) => {
  setReviews((prevReviews) => {
    const updatedReviews = {
        ...prevReviews,
        [feedbackType]: prevReviews[feedbackType] + 1,
    };
    return updatedReviews;
});
}
useEffect(() => {
  window.localStorage.setItem("reviews", JSON.stringify(reviews));
}, [reviews]);

const isEmpty = reviews.good + reviews.neutral + reviews.bad === 0;
const partPos = Math.round(
  (reviews.good / (reviews.good + reviews.neutral + reviews.bad)) * 100
);

    return (
        <>
            <Description />
            <Options
                onFeedback={updateFeedback}
                onReset={resetReviews}
                resetBtn={!isEmpty}
            />
            {!isEmpty ? (
                <Feedback reviews={reviews} partPos={partPos} />
            ) : (
                <Notification message="No feedback yet"></Notification>
            )}
        </>
    );
}

export default App
