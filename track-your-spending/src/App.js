import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <form id="track-spending-form">

            <div>
              <button type="add">+</button>
            </div>

            <div>
              <button type="date">Date</button>
              <button type="expense">Expense</button>
              <button type="earning">Earning</button>
            </div>

            <br />
            <input type="notes" placeholder="Notes" />
            <br />
            <button type="submit">Submit</button>

          </form>
        </header>
      </div>
    );
  }
}

export default App;
