import React, { useState } from 'react';
import '../style.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControl from '@mui/material/FormControl';
import { useSignInEmailPassword } from '@nhost/react'
import { Link, Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

export default function Login({ changeForm, handleChangeForm, theme }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signInEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
        useSignInEmailPassword()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        signInEmailPassword(email, password)
    }

    if (isSuccess) {
        return <Navigate to="/" replace={true} />
    }

    const disableForm = isLoading || needsEmailVerification
    
    return (
        <div className={!changeForm ? ( theme==='dark' ? 'backgroundDark boxShadowDark login active' : 'login active') : ( theme==='dark-theme' ? 'backgroundDark boxShadowDark login' : 'login') } >
            <h2 className="title">Login</h2>
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
                <FormControl variant="standard" className='input'>
                    <Input type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                        placeholder='Confirm a password'
                        startAdornment={
                            <InputAdornment position="start">
                                <LockOutlinedIcon  />
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <div className='loginTools'>
                    <div className="rememberMe">
                        <input type="checkBox" id='checkBox' />
                        <label htmlFor="checkBox">Remember me</label>
                    </div>

                    <a href="#" className='forgetPassword'>Forget password?</a>
                </div>

                <button type='submit' disabled={disableForm}>
                    {isLoading ? <CircularProgress color={'inherit'} size={'1rem'} /> : 'Login now'}
                </button>
                {isError ? <p className='signupError'>{error?.message}</p> : null}
            </form>
            <p>Don't have an account? <a href="#" onClick={(e) => handleChangeForm(e)}>Signup now</a></p>

        </div>
    )
}
