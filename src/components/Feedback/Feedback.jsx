const Feedback = ({ reviews, partPos, totalFeedback }) => {
    const { good, neutral, bad,  } = reviews;


    return (
        <>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {partPos}%</li>
            </ul>
        </>
    );
};

export default Feedback;