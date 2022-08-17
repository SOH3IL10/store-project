import React from 'react';
import '../style.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControl from '@mui/material/FormControl';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSignUpEmailPassword } from '@nhost/react'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export default function SignUp({ changeForm, handleChangeForm }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUpEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } = useSignUpEmailPassword();

    const handleOnSubmit = (e) => {
        e.preventDefault()

        signUpEmailPassword(email, password, {
            displayName: `${name}`.trim(),
            metadata: {
                name
            }
        })
    }

    if (isSuccess) {
        return <Navigate to="/" replace={true} />
    }
    
    const disableForm = isLoading || needsEmailVerification

    return (
        <div className={changeForm ? 'signup active' : 'signup'}>
            <h2 className="title">Registration</h2>
            <form onSubmit={handleOnSubmit}>
                <FormControl variant="standard" className='input'>
                    <Input id="name" type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        autoComplete='off'
                        placeholder='Enter your Name'
                        startAdornment={
                            <InputAdornment position="start">
                                <PersonOutlineOutlinedIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard" className='input'>
                    <Input id="email" type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        autoComplete='current-password'
                        placeholder='Confirm a password'
                        startAdornment={
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className="acceptRuls">
                    <input type="checkBox" id='checkBoxRuls' />
                    <label htmlFor="checkBoxRuls">I accept all terms & conditions</label>
                </div>

                <button type='submit' disabled={disableForm}>
                    {isLoading ? <CircularProgress color={'inherit'} size={'1rem'} /> : 'Register now'}
                </button>
                {isError ? <p className='signupError'>{error?.message}</p> : null}
            </form>
            <p>Already have an account? <a href="#" onClick={(e) => handleChangeForm(e)}>Login now</a></p>

        </div>
    )
}
