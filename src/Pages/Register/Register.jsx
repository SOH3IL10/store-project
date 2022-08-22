import React, { useState } from 'react';
import './style.scss';
import Layout from '../../Components/Layout'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { useStateContext } from '../../Context/Context';

export default function Register() {
    const [changeForm, setChangeForm] = useState(false);
    const { theme } = useStateContext();

    function handleChangeForm(e) {
        e.preventDefault();
        if (!changeForm)
            setChangeForm(true);
        else setChangeForm(false);
    }

    return (
        <Layout>
            <div className='register'>
                <Login changeForm={changeForm} handleChangeForm={handleChangeForm} theme={theme} />

                <SignUp changeForm={changeForm} handleChangeForm={handleChangeForm} theme={theme} />
            </div>
        </Layout>
    )
}
