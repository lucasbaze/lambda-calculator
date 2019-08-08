import React, { useState } from 'react';

//import any components needed
import StyledNumberButton from './NumberButton.js';

//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = () => {
    // STEP 2 - add the imported data to state
    const [numbersToSelect, setNumbers] = useState(numbers);
    let props = {
        padding: 20,
    };

    return (
        <div>
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
            {numbersToSelect.map((number, index) => {
                if (number == 0) {
                    props = { ...props, padding: 40 };
                }

                return (
                    <StyledNumberButton {...props} key={index}>
                        {number}
                    </StyledNumberButton>
                );
            })}
        </div>
    );
};

export default Numbers;
