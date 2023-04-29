import React,{useState} from 'react';
import "./App.css";

const App=()=> {

  const [result,Setresult]=useState("");
  const clickHandler=(event)=>{
   Setresult(result.concat(event.target.value))
  }
  const clearDisplay=()=>{
    Setresult("");
  }
  const calculate=()=>{
    Setresult(eval(result));
  }
  return (
     <div className='main'>
    <div className='cal'>
        <input type="text" placeholder='0' id='answer' value={result} />
        <input type="button" value="9" className='button' onClick={clickHandler}/>
        <input type="button" value="8" className='button' onClick={clickHandler}/>
        <input type="button" value="7" className='button' onClick={clickHandler}/>
        <input type="button" value="6" className='button' onClick={clickHandler}/>
        <input type="button" value="5" className='button' onClick={clickHandler}/>
        <input type="button" value="4" className='button' onClick={clickHandler}/>
        <input type="button" value="3" className='button' onClick={clickHandler}/>
        <input type="button" value="2" className='button' onClick={clickHandler}/>
        <input type="button" value="1" className='button' onClick={clickHandler}/>
        <input type="button" value="0" className='button' onClick={clickHandler}/>
        <input type="button" value="." className='button' onClick={clickHandler}/>
        <input type="button" value="+" className='button' onClick={clickHandler}/>
        <input type="button" value="-" className='button' onClick={clickHandler}/>
        <input type="button" value="*" className='button' onClick={clickHandler}/>
        <input type="button" value="/" className='button' onClick={clickHandler}/>
        <input type="button" value="%" className='button' onClick={clickHandler}/>
        <input type="button" value="Clear" className='button button1' onClick={clearDisplay}/>
        <input type="button" value="=" className='button' onClick={calculate}/>
    </div>
    </div>
  );
}

export default App;
