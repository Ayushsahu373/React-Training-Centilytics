import React from 'react';
import useTimer from './UseTimerHook'; //mycustomhook
function TimerComponent() {
    const { seconds, start, pause, reset, isRunning } = useTimer(0);
  
    return (
      <div>
        <h1>Time: {seconds}s</h1>
        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={pause} disabled={!isRunning}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  
  export default TimerComponent;