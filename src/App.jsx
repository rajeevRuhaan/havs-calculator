import './App.css'
import Calculator from './components/Calculator'

function App() {
 

  return (
    <div className="App">
      <h1> HAVS Calculator</h1>
      <p style={{margin: '0 20%'}}>Are you wondering how to calculate vibration exposure, for one tool or multiple tools, and stay within the legal limits? Enter your tools and times below to find out. The HAVS calculator will tell you if you are under or over the exposure action value, and how close you are to the limit.</p>
        
        <Calculator />
    </div>
  )
}

export default App
