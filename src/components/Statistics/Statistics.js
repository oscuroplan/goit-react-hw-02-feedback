import React from 'react';
import propTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li className={s.item}>good:{good}</li>
        <li className={s.item}>neutral:{neutral}</li>
        <li className={s.item}>bad:{bad}</li>
        <li className={s.item}>total:{total}</li>
        <li className={s.item}>positive feedback:{positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.prototype = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
