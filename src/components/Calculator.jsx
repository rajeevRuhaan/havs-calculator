import React, {useState} from 'react'
import Register from './Register';
import Result from './Result'

export default function Calculator() {
    const [output, setOutput] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [tool, setTool] = useState();
    const [elv, setELV] = useState(0)
    const [eav, setEAV ] = useState(0)
    const [point, setPoint] = useState(0)
    const [result, setResult] = useState(0)
 
    function handleSubmit(e)  {
        e.preventDefault()
        const elvResult = (output * output) * 2;
        const points = (elvResult/60) * minutes
        const percentage = (points/400)* 100
        setELV((60/elvResult)*400)
        setPoint(points)
        setEAV((60/elvResult)*100)

        setResult(percentage)
        console.log(result)
        console.log(points)
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit} className='calculator'>
            <div className='box'>
                <div className='info'>
                    <h2>Tool</h2>
                    <p>What tool are you using?</p>
                    <input required  value={tool} placeholder='eg. Hammer' onChange={(e)=> setTool(e.target.value)}/>
                </div>
                <div className='info'>
                    <h2>Output (m/s²)</h2>
                    <p>What vibration level?</p>
                    <input value={output}  placeholder='10' onChange={(e)=> setOutput(e.target.value)}/>
                </div>
                <div className='info'>
                    <h2>Minutes</h2>
                    <p>How long will you use it?</p>
                    <input value={minutes} placeholder='30' onChange={(e)=> setMinutes(e.target.value)}/>
                </div>
            </div>
            <button style={{width: '100px', height: '50px', marginLeft: '90%'}} type='submit'>Calculate</button>
        </form>
        <Result eav={eav} output={output} tool={tool} result={result} point={point} elv={elv} />
        <Register tool={tool} output={output} point={point} minutes={minutes}/>
      
    </div>
  )
}
