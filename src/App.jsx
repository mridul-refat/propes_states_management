
import './App.css'
import Student from './Components/Student';
import Scoreboard from './Components/Scoreboard';

function App() {
  const students = [
    {
      name : "Refat",
      hometown : "Gazipur",
      live_in : "Tongi",
      salary : "3500"
    },
    {
      name : "Refat",
      hometown : "Gazipur",
      live_in : "Tongi",
      salary : "3500"
    },
    {
      name : "Refat",
      hometown : "Gazipur",
      live_in : "Tongi",
      salary : "3500"
    }
  ]




  return (
    <div>
      
      {
        students.map((student, idx) => <Student key={idx} student={student}></Student>)
      }

      <Scoreboard/>


    </div>
  )
}

export default App
