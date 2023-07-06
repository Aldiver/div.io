import './App.css'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {

  return (
    <div className='App'>
      <div className='max-w-5xl w-11/12 mx-auto'>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
      </div>
    </div>
  )
}

export default App
