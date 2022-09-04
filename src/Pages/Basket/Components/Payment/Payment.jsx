import './style.scss'
import { useStateContext } from '../../../../Context/Context';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function Payment({price}) {
    const { user } = useStateContext();

    return (
        <>
            {
                user ?
                    <Link to={'checkout'} state={{total: price}}>
                        <button className='checkoutBtn'>Check Out <ShoppingCartCheckoutIcon /></button>
                    </Link>
                    :
                    <div className='notLogin'>
                        <h3><WarningAmberIcon color='warning' /> Please login first!</h3>
                        <Link to={'/register'}>
                            <button>Login</button>
                        </Link>
                    </div>
            }
        </>
    )
}
