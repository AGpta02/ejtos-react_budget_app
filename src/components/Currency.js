import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
          type: 'CHG_CURRENCY',
          payload: value,
        });

    }


    return (

        <select className="custom-select" id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
            <option defaultValue>Choose Currency</option>
            <option value="$" name="dollar"> $</option>
            <option value="£" name="pound">£</option>
            <option value="€" name="euro">€</option>
            <option value="₹" name="rupee">₹</option>
        </select>


    );
};

export default Currency;
