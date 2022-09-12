import './style.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function PaymentSuccess({ theme }) {

    return (
        <div className='paymentSuccess'>
            <CheckCircleOutlineIcon className='successIcon' color="success" />
            <h1>Payment Successful!</h1>
            <Link to='/' >
                <button className={theme === 'dark' ? 'colorDark' : undefined}> <NavigateBeforeIcon /> Back to Shop</button>
            </Link>
        </div>
    )
}
