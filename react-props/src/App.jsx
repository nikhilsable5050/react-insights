import Student from "./Student"
import "./index.css"

function App() {
  return (
    <div className="container">
      <Student name="Nikhil" age={69} isStudent={true}/>
      <Student name="O" age={21} isStudent={true}/>
      <Student name="X" age={21} isStudent={false}/>
      <Student name="Y" age={21} isStudent={true}/>
    </div>
  );
}

export default App
