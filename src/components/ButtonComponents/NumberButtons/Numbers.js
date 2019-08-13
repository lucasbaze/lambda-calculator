import React, { useState } from 'react';

//import any components needed
import Button from '../Button.js';

//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const styles = {
    gridColumn: '1 / span 3',
    gridRow: '2 / span 4',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
};

const Numbers = props => {
    // STEP 2 - add the imported data to state
    const [numbersToSelect, setNumbers] = useState(numbers);

    let overRide = {
        width: 70,
    };

    return (
        <div style={styles}>
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
            {numbersToSelect.map((number, index) => {
                if (index === 9) {
                    overRide.width = 180;
                } else {
                    overRide.width = 70;
                }

                return (
                    <Button
                        {...overRide}
                        key={index}
                        value={Number(number) || '.'}
                        onClick={e => props.onClick(e.target.value)}
                    >
                        {number}
                    </Button>
                );
            })}
        </div>
    );
};

export default Numbers;
