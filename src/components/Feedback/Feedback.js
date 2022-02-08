import React from 'react';
import './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbackGood = () => {
    this.setState(
      prevState => ({ good: prevState.good + 1 }),
      //   { good: 1 }, так можно перезаписать текущее значение, но не добавить к имеющемуся
      //   ,()=>{} можно передать второй параметр
    );
    // this.countTotalFeedback();
  };

  countFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.round((this.state.good * 100) / total);
    return positiveFeedback;
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please leave feedback</h2>
        <div className="Feedback__buttons">
          <button type="button" onClick={this.countFeedbackGood}>
            Good
          </button>
          <button type="button" onClick={this.countFeedbackNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.countFeedbackBad}>
            Bad
          </button>
        </div>
        <div className="Feedback__statistics">
          <h3 className="Feedback__statisticsTitle">Statistics</h3>
          <ul className="Feedback__statisticsList">
            <li className="Feedback__statisticsItem">
              Good: {this.state.good}
            </li>
            <li className="Feedback__statisticsItem">
              Neutral: {this.state.neutral}
            </li>
            <li className="Feedback__statisticsItem">Bad: {this.state.bad}</li>
            <li className="Feedback__TotalFeedback">
              Total: {this.countTotalFeedback()}
            </li>
            <li className="Feedback__TotalFeedback">
              Positive feedback: {this.countPositiveFeedbackPercentage()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
