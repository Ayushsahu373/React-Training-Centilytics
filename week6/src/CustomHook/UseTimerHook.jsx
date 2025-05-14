import { useState, useEffect } from 'react';

function useTimer(startValue = 0) {
  const [seconds, setSeconds] = useState(startValue);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSeconds(startValue);
  };

  return { seconds, start, pause, reset, isRunning };
}
export default useTimer;