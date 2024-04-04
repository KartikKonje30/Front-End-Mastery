import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);



  useEffect(() => {
    let timerId;
      if (isRunning) {
        timerId  = setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
          clearInterval(timerId);
        }
      }
    }, [isRunning, timer]);

    const formartTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    };

    const startStop = () => {
      setIsRunning(!isRunning);
    };

    const reset = () => {
      setIsRunning(false);
      setTimer(0);
    };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formartTime(timer)}</p> 
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
