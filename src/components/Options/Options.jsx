import s from "./Options.module.css";

const Options = ({ onFeedback, onReset, resetBtn }) => {
  return (
    <div className={s.options}>
      <button
        type="button"
        className={s.good}
        onClick={() => onFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={s.neutral}
        onClick={() => onFeedback("neutral")}
      >
        Neutral
      </button>
      <button type="button" className={s.bad} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {resetBtn && (
        <button
          type="button"
          className={s.reset}
          onClick={() => onReset("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
