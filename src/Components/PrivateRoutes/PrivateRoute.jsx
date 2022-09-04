import { useAuthenticated } from '@nhost/react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const auth = useAuthenticated();

    return auth ? children : <Navigate to={'/register'} />
}
