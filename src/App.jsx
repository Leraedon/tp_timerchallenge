import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PointBoard from './components/PointBoard';
import TimerBox from './components/TimerBox';

function App() {
  return (
    <main className='bg-gradient-to-b to-green-400 from-teal-700'>
      <Header />
      <PointBoard />
      <div className="flex flex-row flex-wrap justify-center">
        <TimerBox targetLevel={1}/>
        <TimerBox targetLevel={2}/>
        <TimerBox targetLevel={3}/>
        <TimerBox targetLevel={4}/>
        <TimerBox targetLevel={5}/>
        <TimerBox targetLevel={6}/>
      </div>
    </main>
  );
}

export default App;
