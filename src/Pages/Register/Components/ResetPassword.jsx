import { useState } from 'react';
import '../style.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useResetPassword } from '@nhost/react';
import CircularProgress from '@mui/material/CircularProgress';
import { useStateContext } from '../../../Context/Context';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const { theme } = useStateContext();

    const { resetPassword, isLoading, isSent, isError, error } = useResetPassword();

    const handleOnSubmit = e => {
        e.preventDefault();
        resetPassword(email, { redirectTo: '/register/change-password' });
    }

    return (
        <div className={theme === 'dark' ? 'backgroundDark boxShadowDark resetPassword' : 'resetPassword'}>
            <h2 className="title">Reset your password</h2>
            {
                isSent ?
                    <p>
                        An email has been sent to <strong>{email}</strong>. Please follow the link in
                        the email to reset your password.
                    </p> :
                    <form onSubmit={handleOnSubmit} >
                        <FormControl variant="standard" className='input'>
                            <Input type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                                autoComplete='off'
                                placeholder='Enter your email'
                                startAdornment={
                                    <InputAdornment position="start">
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <button type='submit'>
                            {isLoading ? <CircularProgress color={'inherit'} size={'1rem'} /> : 'Send reset link'}
                        </button>
                        {isError ? <p className='error'>{error?.message}</p> : null}
                    </form>
            }
            <p><Link to='/register'>Back to Login</Link></p>
        </div>
    )
}
