import React, { useState } from "react";

function CalculatorReactjs() {
  const [result, setResult] = useState("");
  // const [change, setchange] = useState(false);
  // const [result1, setResult1] = useState("");
  const [history, setHistory] = useState([]);



  // const showhistory = () => {
  
    
  // }


  const handleclick = (e) => {
    
    setResult(result.concat(e.target.name));

    console.log(result)
    
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString())
      const data=eval(result).toString();
          

      setHistory((Totolhistory) => {
        return [...Totolhistory, data];
       
      });     
     
    } catch (error) {
      setResult("error");
    }
  };
  return (
    <>
      <div className="History">
        {/* <button onClick={showhistory}>check</button> */}
        <h3
          style={{
            textAlign: "center",
          }}
        >
          History
        </h3>
        <p style={{textAlign:"center"}}>{history.length > 0 ? null : "No history"}</p>
        {history.map((hist) => {
          return (
            <ul>
              <li className="history">{hist}</li>
            </ul>
          );
        })}
        <p style={{ textAlign: 'center' }}></p> 
        <div className="cleardiv">     <button onClick={()=>{setHistory([])}} className="btnclaer"> clear</button>
</div>
      </div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={clear} id="clear" className="highlight">
            clear
          </button>
          <button onClick={backspace} id="backspace" className="highlight">
            c
          </button>
          <button name="/" onClick={handleclick} className="highlight">
            &divide;
          </button>
          <button name="7" onClick={handleclick}>
            7
          </button>
          <button name="8" onClick={handleclick}>
            8
          </button>
          <button name="9" onClick={handleclick}>
            9
          </button>
          <button name="*" onClick={handleclick} className="highlight">
            &times;
          </button>
          <button name="4" onClick={handleclick}>
            4
          </button>
          <button name="5" onClick={handleclick}>
            5
          </button>
          <button name="6" onClick={handleclick}>
            6
          </button>
          <button name="-" onClick={handleclick} className="highlight">
            &ndash;
          </button>
          <button name="1" onClick={handleclick}>
            1
          </button>
          <button name="2" onClick={handleclick}>
            2
          </button>
          <button name="3" onClick={handleclick}>
            3
          </button>
          <button name="+" onClick={handleclick} className="highlight">
            +
          </button>
          <button name="0" onClick={handleclick}>
            0
          </button>
          <button name="." onClick={handleclick}>
            .
          </button>
          <button id="result" onClick={calculate} history={history} className="highlight">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default CalculatorReactjs;
