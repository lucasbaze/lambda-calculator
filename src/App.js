import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import * as C from './components';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
//import Logo from './components';

function App() {
    // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
    // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
    // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
    // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
    // Don't forget to pass the functions (and any additional data needed) to the components as props

    const [result, setResult] = useState('');
    const [calculated, setCalculated] = useState(false);

    const updateResults = value => {
        if (calculated) {
            setResult(value);
            setCalculated(false);
        } else {
            setResult(result + value);
        }
    };

    const calculate = () => {
        try {
            setResult(eval(result).toFixed(3) || '');
            setCalculated(true);
        } catch (e) {
            setResult(e);
        }
    };

    const reset = () => {
        setResult('');
    };

    const flipCharge = () => {
        setResult('-' + result);
    };

    const percentage = () => {
        try {
            setResult(`${eval(result / 100)}`);
        } catch (e) {
            setResult(e);
        }
    };

    return (
        <div className="container">
            <C.Logo />
            <C.Display>{result}</C.Display>
            <div className="App">
                <C.Specials
                    reset={reset}
                    flipCharge={flipCharge}
                    percentage={percentage}
                />
                <C.Operators onClick={updateResults} calculate={calculate} />
                <C.Numbers onClick={updateResults} />
                {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
            </div>
        </div>
    );
}

export default App;
