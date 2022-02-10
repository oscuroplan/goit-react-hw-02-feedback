import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.buttonList}>
    {options.map(option => (
      <li key={option}>
        <button
          className={s.button}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onLeaveFeedback: propTypes.func,
};
