import './App.css';
import "./index.css"
import React, {useState} from 'react';
function App() {
  //we are making usestaste here


  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

let calBmi = (event) => {
  //preventing sumitting to the server
  event.preventDefault()
  console.log(event)

  //making bmi calculator formula
  if  (weight === 0 || height === 0) {
    alert('Please enter a valid weight and height')
  } else {
    let bmi = (weight / (height * height) * 703)
    setBmi(bmi.toFixed(1))
  }

  //logic for message

  if(bmi < 25) {
    setMessage('you are underweight')
  }
  else if (bmi >= 25 && bmi < 30) {
    setMessage('you are healthy person')
}else {
  setMessage('you are overweight')
}
}

let reload = () => {
  window.location.reload()
}

  return (
    <div className="app">
      <div className="container">
        <h2 classname='center'>BMI Calculator</h2>
        <form on onSubmit={calBmi}>
          <div>
            <lebel>Weight (lbs)</lebel>
            <input type="text"  placeholder='Enter Weight value'
             value={weight} 
             onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <lebel>Height (in)</lebel>
            <input type="text"  placeholder='Enter Height value' 
            value={height}
             onChange={(event) => setHeight(event.target.value)} /> 
          </div>
          <div>
            <button className='btn' type='sumbit'>Sumbit</button>
            <button className='btn btn-outline' onClick={reload} type='sumbit'>Reload</button>
          </div>          
        </form>
        <div className='center'>
          <h3>your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
    </div>
    </div>
  );
}

export default App;
