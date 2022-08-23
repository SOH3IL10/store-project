import './style.scss';
import Layout from '../../Components/Layout'
import { Outlet } from 'react-router-dom';

export default function Register() {
    return (
        <Layout>
            <div className='register'>
                <Outlet />
            </div>
        </Layout>
    )
}