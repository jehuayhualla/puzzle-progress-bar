import React from 'react'
import './App.css';
import ProgressBar from './components/bars/progress-bar';
import CustomButton from './components/buttons/custom-button';
function App() {
  const [renderedProgress, setRenderedProgress] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  var interval = null;
  const maxBoxes = 15

  const handleInterval = () => {
    if(paused) return
    if(renderedProgress >= maxBoxes) return
    const newValue = renderedProgress + 1
    setRenderedProgress(newValue)
  }

  React.useEffect(()=>{
    const id = setInterval(handleInterval,500);
    interval = id;
    return () => {
      clearInterval(interval);
    };
  })

  const onStart = () => {
    setPaused(false)
  }

  const onStop = () => {
    setPaused(true)
  }

  const onReset = () => {
    setRenderedProgress(0)
  }

  return (
    <div className="App">
      <ProgressBar boxlength={maxBoxes} boxesLoaded={renderedProgress} />
      <CustomButton onClick={onStart} title="Start" />
      <CustomButton onClick={onStop} title="Stop" />
      <CustomButton onClick={onReset} title="Reset" />
    </div>
  );
}

export default App;
