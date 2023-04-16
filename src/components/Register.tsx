import React from 'react'
import './Register.css'

export default function Register({tool, output, minutes, point}) {
  return (
    <div className='register'>
            <table >
              <thead>
                <tr>
                  <th scope="col">Tool</th>

                  <th scope="col">Output</th>
                  <th scope="col">Minutes</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
                
                  {
                    point ===  0 ? <tr><p>Waiting for your first exposure...</p></tr> 
                    :
                    <tr>
                      <th scope="row">{tool}</th>

                      <td>{output}</td>
                      <td>{minutes}</td>
                      <td>{Math.floor(point)}</td>
                    </tr>
                  }
              </tbody>
            </table>
            
            <h3><b>Total Points: {Math.floor(point)}</b></h3>
        { 
          point <= 400 ?
          <div className='normal'>
            <p>Looking good! So far, you're under the exposure action value - keep working safely.</p>
            </div> 
            :
          <div className='warning'>
            <p>Stop work! You've reached the exposure limit value - no more vibrations for you today.</p>
          </div>
        }
    </div>
  )
}
