import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  //робимо стрілку, щоб прив'язати this
  //у стрілки контекст з'являється в момент створення
  //у стрілки немає свого контекста, тому вона забирає його від батька
  onBtnGoodClicked = () => 
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: this.good + this.neutral + this.bad
      
    }))

  onBtnNeutralClicked = () => 
    this.setState(prevState => ({neutral: prevState.neutral + 1}))
    
  onBtnBadClicked = () => 
    this.setState(prevState => ({ bad: prevState.bad + 1 }))

  countTotalFeedback = () =>
    ({ total: this.state.good + this.state.neutral + this.state.bad })


  countPositiveFeedbackPercentage = () => ({})

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <div>
        <h2>Please Leave feedback</h2>
        <button type="button" onClick={this.onBtnGoodClicked}>Good</button>
        <button type="button" onClick={this.onBtnNeutralClicked}>Neutral</button>
        <button type="button" onClick={this.onBtnBadClicked}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad:{bad} </p>
        <p>Total:{total} </p>
        <p>Positive feedback: </p>
        
        </div>
  )
  }
}

export default App;