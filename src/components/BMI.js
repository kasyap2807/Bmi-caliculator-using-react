import React,{ useState }from 'react'
import "./BMIStyle.css"
function BMI() {
    let [result,setResult] = useState("");
    let [sol] = useState("");
    let [sol2] = useState("");
    const handelChange=(e)=>{
        sol = sol.replace(sol,e.target.value);
        // setResult(result.replace(result,sol));
    }
    const handelChange2=(e)=>{
       sol2= sol2.replace(sol2,"/("+e.target.value+"*"+e.target.value+")*10000");
        // setResult(result.concat("*"));
        // setResult(result.concat(sol2))
    }
    const clear = () =>{
        setResult(result.replace(result,""));
    }
    const evalute =()=>{
        try{
        result = result.concat(sol+sol2)
        // result = parseFloat(result);
        // setResult(result)
        let x = (eval(result));
        if(x>=18 && x<=24){
            result = result.replace(result,"FIT")
        }
        else if(x>24){
            result = result.replace(result,"over weight")
        }
        else if(x<18){
            result = result.replace(result,"low weight")
        }
        setResult(result)
    }
    catch(err){
        setResult('Error')
        // setResult(result)
        }
    }
  return (
    <div className='main'>
      <form className='form'>
        <input type='text' placeholder="weight in kgs" onChange={handelChange}></input><br></br>
        <input type='text' placeholder='height in cm' onChange={handelChange2}></input><br></br>
        {/* <button onClick={evalute}>try</button> */}
        <input type='text' placeholder='submit' onClick={evalute} value={"for submit type s"} id='text'></input>
        <button onClick={clear}>reset</button><br></br>
        </form>
        <input type='text' placeholder='result' value={result}></input>
        <h1>{result}</h1>
    </div>
  )
}

export default BMI