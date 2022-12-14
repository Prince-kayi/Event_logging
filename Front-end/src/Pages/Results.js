import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiPostCall } from '../Utility';
import './page.css';
const Results = () => {
  const [resData, setRes] = useState({
    option: " "
  })
  const change = (e) => {
    const answer = { ...resData }
    answer[e.target.name] = e.target.value;
    setRes(answer)
  }
  const display = async () => {
    try {
      let results = await apiPostCall('/results', resData);
      console.log('Results : ' + results);
    }
    catch (error) {
      console.log(error);
    }
    console.log("results", resData);
  }
  return (
    <div className='ults'>
      <div className='treati-wrap'>
        <form>
          <h1 className='log'>Diagonsis Results</h1>
          <div className='ress-in'>
            <label> Infected:
              <input type="checkbox"
                name='option'
                value="Infected"
                onChange={change}
              />
            </label>
          </div>
          <div className='ress-in'>
            <label>Not Infected:
              <input type="checkbox"
                name='option'
                value=" Not Infected"
                onChange={change}
              />
            </label>
          </div>
          <div className='ress-in'>
            <label>Latent TB:
              <input type="checkbox"
                name='option'
                value=" Latent TB"
                onChange={change}
              />
            </label>
          </div>
          <div className='ress-in'>
            <label>TB diseases:
              <input type="checkbox"
                name='option'
                value="TB diseases"
                onChange={change}
              />
            </label>
          </div>
          <div className='addmit'>
            <button className='fours' onClick={display}><Link to="/admit">Admit</Link></button>
            <button className='fives'><Link to="/admin">LogOut</Link></button>
            <button className='sixs'><Link to="/treat" onClick={display}>Treatment</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Results
