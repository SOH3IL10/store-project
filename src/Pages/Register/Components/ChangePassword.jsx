import '../style.scss';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControl from '@mui/material/FormControl';
import { useChangePassword } from '@nhost/react';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useStateContext } from '../../../Context/Context';
import { Navigate } from 'react-router-dom';

export default function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const { theme } = useStateContext();

    const { changePassword, isLoading, isError, isSuccess, error } = useChangePassword();

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword || password === '')
            return setErrorPassword('Please enter a currect password');
        else setErrorPassword('');

        await changePassword(password);
    }

    if (isSuccess)
        return <Navigate to="/" replace={true} />

    return (
        <div className={theme === 'dark' ? 'backgroundDark boxShadowDark changePassword' : 'changePassword'}>
            <h2 className="title">Change your password</h2>
            <form onSubmit={handleChangePassword}>
                <FormControl variant="standard" className='input'>
                    <Input id="password" type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                        placeholder='Create a password'
                        startAdornment={
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard" className='input'>
                    <Input type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete='current-password'
                        placeholder='Confirm a password'
                        startAdornment={
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <button type='submit'>
                    {isLoading ? <CircularProgress color={'inherit'} size={'1rem'} /> : 'Change password'}
                </button>
                {isError ? <p className='error'>{error?.message}</p> : null}
                {errorPassword ? <p className='error'>{errorPassword}</p> : null}
            </form>
        </div>
    )
}
