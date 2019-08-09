import React, { useState } from 'react';

//import any components needed
import Button from '../Button.js';
import { colors } from '../../../styles.js';

//Import your array data to from the provided data file
import { specials } from '../../../data.js';

const styles = {
    gridColumn: '1 / span 3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
};

const Specials = props => {
    // STEP 2 - add the imported data to state
    const [specialChars, setSpecialChars] = useState(specials);
    let onClick;

    return (
        <div style={styles}>
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
            {specialChars.map((char, index) => {
                switch (char) {
                    case 'C':
                        onClick = props.reset;
                        break;
                    case '+/-':
                        onClick = props.flipCharge;
                        break;
                    case '%':
                        onClick = props.percentage;
                        break;
                    default:
                        break;
                }
                return (
                    <Button
                        key={index}
                        bgColor={colors.specialsColor}
                        onClick={onClick}
                    >
                        {char}
                    </Button>
                );
            })}
        </div>
    );
};

export default Specials;
