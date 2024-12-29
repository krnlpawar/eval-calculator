import React, { useState } from 'react'

export default function Calculator() {

  const [val, setVal] = useState('')
  const [evalval, setEvalVal] = useState('')

	const handleEval = (key) => {
		if(key == 'C'){
			setVal('')
			setEvalVal('')
			return;
		}

		if(val == '' || val == 0){
			if(key == '+' || key == '-' || key == '/' || key == '*'){
				return;
			}
		}

		if(key  == '='){
			try {
				console.log('equal pressed');
				console.log(val);
				const evaled = eval(val)
				console.log('evaled is');
				console.log(evaled)
				setVal(evaled)
				setEvalVal('')
			} catch (error) {
				console.log(error);
				setVal('')
				setEvalVal('')
			}
		}else{
			setVal((old) => old + key)
		}
	}

  return (
	<div className="calculator-container">
	<input type="text" value={val}  placeholder='0' className="calculator-display" disabled/>
	<div className="calculator-buttons">
		<button onClick={() => handleEval('C')} className="button c">C</button>
		<button onClick={() => handleEval('/')} className="button">/</button>
		<button onClick={() => handleEval('*')} className="button">*</button>
		<button onClick={() => handleEval('-')} className="button">-</button>
		<button onClick={() => handleEval('+')} className="button">+</button>
		<button onClick={() => handleEval('7')} className="button">7</button>
		<button onClick={() => handleEval('8')} className="button">8</button>
		<button onClick={() => handleEval('9')} className="button">9</button>
		<button onClick={() => handleEval('4')} className="button">4</button>
		<button onClick={() => handleEval('5')} className="button">5</button>
		<button onClick={() => handleEval('6')} className="button">6</button>
		<button onClick={() => handleEval('1')} className="button">1</button>
		<button onClick={() => handleEval('2')} className="button">2</button>
		<button onClick={() => handleEval('3')} className="button">3</button>
		<button onClick={() => handleEval('0')} className="button zero">0</button>
		<button onClick={() => handleEval('=')} className="button equals">=</button>
	</div>
	</div>
  )
}
