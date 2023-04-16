import React from 'react'

export default function Result({eav, output, tool, result, point, elv }) {
   const elvhr = Math.floor(elv/60)
   const elvmin = Math.floor(elv % 60);
   const eavhr = Math.floor(eav/60)
   const eavmin = Math.floor(eav % 60);

  return (
    <div className='result'>
        <h1>RESULT</h1>
        <div><span>{Math.floor(result*100)/100}</span>%</div>
        <p>`A {tool} with a vibration output of {output}m/s² reaches the EAV 
            (Exposure Action Value) in {eavhr}hrs:{eavmin}mins and the ELV 
            (Exposure Limit Value) in  {elvhr}hrs:{elvmin}mins.`</p>
            {result ? <p>You have used {Math.floor(point)} points on this tool, which is 
            {Math.floor(result)}% of the maximum daily allowance.</p> 
            : <p>Let's get started, use the calculator to find out your vibration exposure!</p>}
    </div>
  )
}
