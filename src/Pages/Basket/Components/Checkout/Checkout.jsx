import React, { useRef, useState } from "react";
import './style.scss';
import Layout from "../../../../Components/Layout";
import { useDispatch, useStateContext } from "../../../../Context/Context";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CustomSeparator from "../../../../Components/Breadcrumbs";
import images from '../../../../assets/images/index';
import CircularProgress from '@mui/material/CircularProgress';
import { removeBasket } from "../../../../Context/actions";

const Input = ({ data, handleChagneInput }) => {
    return (
        <>
            <label htmlFor={data.id}>{data.label}</label>
            <input type={data.type}
                id={data.id}
                name={data.id}
                placeholder={data.placeholder}
                value={data.value}
                onChange={(e) => handleChagneInput(e)}
            />
        </>
    )
}

export default function Checkout() {
    const { user, theme } = useStateContext();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [card, setCard] = useState({
        number: '',
        month: '',
        year: '',
        cvv: ''
    })

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();

        if (card.number === '' || card.month === '' || card.year === '' || card.cvv === '') {
            setIsLoading(false)
            return setMessage(`Fields must not be empty`)
        }
        else setMessage(null)

        const date = new Date();
        if (card.year < date.getFullYear()) {
            setIsLoading(false)
            return setMessage(`card year is not correct, your card is expired`);
        }
        else setMessage(null);

        setTimeout(() => {
            setIsLoading(false);
            dispatch(removeBasket());
        navigate(`/basket`, { replace: true, state: { payment: 'success' } });
    }, 3000)

    // setIsLoading(false)
}

const handleChagneInput = (e) => {
    const id = e.target.id;

    switch (id) {
        case 'cardNumber':
            const cardNum = e.target.value;

            if (cardNum.length > 19)
                return

            return (
                setCard({
                    ...card,
                    number: cardNum.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim()
                })
            )

        case 'expmonth':
            const monthNum = e.target.value;

            if (monthNum.length > 2 || monthNum > 12 || monthNum === '00' || monthNum < 0)
                return

            return (
                setCard({
                    ...card,
                    month: monthNum
                })
            )

        case 'expyear':
            const yearNum = e.target.value;

            if (yearNum.length > 4)
                return

            return (
                setCard({
                    ...card,
                    year: yearNum
                })
            )

        case 'cvv':
            const cvv = e.target.value;

            if (cvv.length > 3)
                return

            return (
                setCard({
                    ...card,
                    cvv: e.target.value
                })
            )

        default:
            return (
                setCard({
                    ...card
                })
            )
    }
}

return (
    <Layout>
        <div className='checkout'>
            <CustomSeparator steps={[
                { title: 'Home', href: '/' },
                { title: 'Basket', href: '/basket' },
            ]} currentStep={'Payment'} />
            {
                user &&
                <div className={theme === 'dark' ? "backgroundDark checkoutInfo" : "checkoutInfo"}>
                    <p className="checkoutInfoItem" ><PersonOutlineIcon color="info" /> <strong>Customer :</strong> <span>{user.displayName}</span></p>
                    <p className="checkoutInfoItem" ><EmailOutlinedIcon color="info" /> <strong>Email :</strong> {user.email}</p>
                    <p className="checkoutInfoItem" ><MonetizationOnOutlinedIcon color="info" /> <strong>Total Price :</strong> {state?.total}</p>
                </div>
            }

            <form ref={inputRef} className={theme === 'dark' ? 'paymentFormDark payment-form' : 'payment-form'} onSubmit={handleSubmit}>
                <div className="accepted-cards">
                    <label htmlFor="cards">Accepted Cards</label>
                    <div id='cards'>
                        {
                            images?.map((img, index) => <img key={index} src={img} />)
                        }
                    </div>
                </div>

                <Input handleChagneInput={handleChagneInput} data={{
                    label: 'Credit card number',
                    type: 'text',
                    id: 'cardNumber',
                    placeholder: '1111-2222-3333-4444',
                    value: card.number,
                }} />
                {/* <label htmlFor="cardNumber">Credit card number</label>
                    <input type="number" id="cardNumber" placeholder="1111-2222-3333-4444" value={card.number}
                        onChange={(e) => (
                            setCard({
                                ...card,
                                number: e.target.value
                            })
                        )}
                    /> */}

                <div className="cardexp">
                    <div className="expmonth">

                        <Input handleChagneInput={handleChagneInput} data={{
                            label: 'Exp Month',
                            type: 'number',
                            id: 'expmonth',
                            placeholder: '05',
                            value: card.month,
                        }} />

                        {/* <label htmlFor="expmonth">Exp Month</label>
                            <input type="number" name="expmonth" id="expmonth" placeholder="05"
                                value={card.month}
                                onChange={(e) => (
                                    setCard({
                                        ...card,
                                        month: e.target.value
                                    })
                                )}
                            /> */}
                    </div>

                    <div className='expyear'>

                        <Input handleChagneInput={handleChagneInput} data={{
                            label: 'Exp Year',
                            type: 'number',
                            id: 'expyear',
                            placeholder: '2025',
                            value: card.year,
                        }} />

                        {/* <label htmlFor="expyear">Exp Year</label>
                            <input type="number" name="expyear" id="expyear" placeholder="25"
                                value={card.year}
                                onChange={(e) => (
                                    setCard({
                                        ...card,
                                        year: e.target.value
                                    })
                                )}
                            /> */}
                    </div>

                </div>

                <Input handleChagneInput={handleChagneInput} data={{
                    label: 'CVV',
                    type: 'number',
                    id: 'cvv',
                    placeholder: 'XXX',
                    value: card.cvv,
                }} />

                {/* <label htmlFor="cvv">CVV</label>
                    <input type="number" name="cvv" id="cvv" placeholder="XXX"
                        value={card.cvv}
                        onChange={(e) => (
                            setCard({
                                ...card,
                                cvv: e.target.value
                            })
                        )}
                    /> */}

                <button disabled={isLoading} id="submit">
                    <span id="button-text">
                        {isLoading ? <CircularProgress color={'inherit'} size={'1rem'} /> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>

    </Layout>
);
}