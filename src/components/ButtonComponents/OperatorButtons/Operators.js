import React, { useState } from 'react';

//import any components needed
import Button from '../Button.js';
import { colors } from '../../../styles.js';

//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const styles = {
    gridColumn: '4',
    gridRow: '1 / span 5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
};

const Operators = props => {
    // STEP 2 - add the imported data to state
    const [operatorChars, setOperators] = useState(operators);

    return (
        <div style={styles}>
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
            {operatorChars.map((operator, index) => (
                <Button
                    key={index}
                    value={operator.value}
                    bgColor={colors.operatorColor}
                    onClick={e => props.updateOperation(e.target.value)}
                >
                    {operator.char}
                </Button>
            ))}
        </div>
    );
};

export default Operators;
