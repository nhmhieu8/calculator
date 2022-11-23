import { useState } from 'react';
import './app.css';

function App() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0];
    const operators = ['+', '-', '×', '÷'];

    //handle function
    const handleClick = (el) => {
        setExpression((prev) => prev + el);
    };

    const clearEl = () => {
        setExpression('');
        setResult('0');
    };

    const deleteEl = () => setExpression((prev) => prev.slice(0, -1));

    const calculate = () => {
        let calcStr = expression;
        calcStr = calcStr.replace(/×/g, '*').replace(/÷/g, '/');

        if (!operators.includes(expression.slice(-1))) {
            let calcResult = eval(calcStr).toString();
            setExpression('');
            setResult(calcResult);
        }
    };

    return (
        <div className="main">
            <div className="wrapper">
                <div className="expression">{expression}</div>
                <div className="result">
                    <span>Ans:</span>
                    <span>{result}</span>
                </div>

                <div className="button-box">
                    <div className="actions">
                        <button onClick={clearEl}>AC</button>
                        <button onClick={deleteEl}>DEL</button>
                    </div>
                    <div className="elements">
                        <div className="numbers">
                            {numbers.map((numberEl, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(numberEl)}
                                >
                                    {numberEl}
                                </button>
                            ))}
                            <button onClick={calculate}>=</button>
                        </div>
                        <div className="operators">
                            {operators.map((operatorEl, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(operatorEl)}
                                >
                                    {operatorEl}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
