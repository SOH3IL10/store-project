import React, { useState } from 'react'
import './style.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function Payment({theme}) {
    const [value, setValue] = useState('creditCard');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <aside className={theme === 'dark' ? 'backgroundDark boxShadowDark checkoutPayment' : 'checkoutPayment'}>
            <h1>Your almost there!</h1>
            <form>
                <div className='paymentMethod'>
                    <small>payment Method</small>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="creditCard" control={<Radio size="small" />} label={"Credit Card"} />
                        <FormControlLabel value="paypal" control={<Radio size="small" />} label="Paypal" />
                    </RadioGroup>
                </div>

                <div className='nameOnCard'>
                    <small>Name on Card:</small>
                    <strong>John Carter</strong>
                </div>

                <div className='cardNumber'>
                    <small>Card Number:</small>
                    <strong>1245 6857 4258 2153</strong>
                </div>

                <div className="privacyCardInfo">
                    <div className="cardExp">
                        <small>Expiration Date:</small>
                        <input className={theme === 'dark' && 'colorDark'} type="month" />
                    </div>

                    <div className="cardCvv">
                        <small>CVV:</small>
                        <input type="number" placeholder='XXX' />
                    </div>
                </div>

                <button className='checkoutBtn'>Check Out</button>
            </form>
        </aside>
    )
}
