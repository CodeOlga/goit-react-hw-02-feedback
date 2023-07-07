import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  //робимо стрілку, щоб прив'язати this
  //у стрілки контекст з'являється в момент створення
  //у стрілки немає свого контекста, тому вона забирає його від батька
  
  onBtnClicked = (type) => 
    this.setState(prevState => ({ [type]: prevState[type] + 1 }))

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };


  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
  <>
  <Section title="Please Leave feedback">
    <FeedbackOptions options={} onLeaveFeedback={this.onBtnClicked} />
  </Section>
        
  <Section title="Statistics">
  <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
  </Section>
  </>
    )

    // return (
    //   <div>
    //     <h2>Please Leave feedback</h2>
    //     <button type="button" onClick={() => this.onBtnClicked('good')}>Good</button>
    //     <button type="button" onClick={() => this.onBtnClicked('neutral')}>Neutral</button>
    //     <button type="button" onClick={() => this.onBtnClicked('bad')}>Bad</button>
    //     <h3>Statistics</h3>
    //     <p>Good: {good} </p>
    //     <p>Neutral: {neutral} </p>
    //     <p>Bad: {bad} </p>
    //     <p>Total: {totalFeedback} </p>
    //     <p>Positive feedback: {positivePercentage} %</p>
        
    //     </div>
    // )





    
  }
}

export default App;