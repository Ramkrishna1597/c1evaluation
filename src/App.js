// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const[score, setScore]  = useState(76)
  const[wicket, setwicket]  = useState(2)
  const[ball, setball]  = useState(8.2)
  const add1 = () =>{
    if(score>=100){
      return;
    }
    setScore(score + 1)
  }
  const add4 = () =>{
    if(score>100){
      return;
    }
    setScore(score + 4)
  }
  const add6 = () =>{
    if(score>100){
      return
    }
    setScore(score + 6)
  }
  const addwicket = () =>{
    if(wicket>12){
      return
    }
    setwicket(wicket+1)
  }
  const addball = () =>{
    
    if(ball>12){
      return
    }
    console.log(ball)
    setball (ball + 1)
    
  }
  return (
    <div className="App">
    <h3>India:</h3>
    <div className="banner">
      <div>
        Score:{" "}
        <h1 className="scoreCount">
          {
            // show "score" here
            score
            
          }
        </h1>
      </div>
      <div>
        Wicket:{" "}
        <h1 className="wicketCount">
          {
            // show wicket here
            wicket
            
          }
        </h1>
      </div>

      <div>
        Over:{" "}
        <h1 className="overCount">
          {
            // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
            // if 1 more ball is thrown then over is now 5.0
            // you have to write logic to form this string from current ball number.
            ball
          }
        </h1>
      </div>
    </div>

    <div className="addScore">
      Add Score
      {/* these buttons should add the respective amount in the score */}
      <button className="addScore1" onClick = {add1(1)}>Add 1</button>
      <button className="addScore4" onClick = {add4(4)}>Add 4</button>
      <button className="addScore6" onClick = {add6(6)}>Add 6</button>
    </div>

    <div className="addWicket">
      Add Wicket
      {/* Increase the count of wicket */}
      <button onClick = {addwicket()}>Add 1 wicket</button>
    </div>

    <div className="addBall">
      Add ball
      {/* Increase the total number of balls thrown here. */}
      <button onClick = {addball()}>Add 1</button>
    </div>

    {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
  </div>
  );
}

export default App;
