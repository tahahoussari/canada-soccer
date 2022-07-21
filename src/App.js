import './App.css';
import Top from './Top';
import Test from './Test';
import Team from'./Team';
import Schedule from './Schedule';
import Quiz from './Quizzes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Top></Top>

      <div>
        <Test></Test>
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
        <Schedule></Schedule>
      </div>
      <div>
        <Quiz></Quiz>
      </div>
    </div>
  );
}

export default App;
