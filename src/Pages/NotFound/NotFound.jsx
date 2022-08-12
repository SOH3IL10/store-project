import './style.scss';
import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Layout>
            <div className='notFound'>
                <h1>404</h1>
                <h2>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </div>
        </Layout>
    )
}
