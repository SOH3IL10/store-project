import Basket from "./Pages/Basket";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ProductsBlog from "./Pages/ProductsBlog";
import Register from "./Pages/Register";
import Categories from "./Pages/Categories";
import { useUserData } from "@nhost/react";
import { useDispatch, useStateContext } from "./Context/Context";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ChangePassword from "./Pages/Register/Components/ChangePassword";
import Login from "./Pages/Register/Components/Login";
import SignUp from "./Pages/Register/Components/SignUp";
import ResetPassword from "./Pages/Register/Components/ResetPassword";
import Checkout from "./Pages/Basket/Components/Checkout";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute";
import { setDarkModeAction, setUserAction } from "./Context/actions";

function App() {
    const user = useUserData();
    const dispatch = useDispatch();
    const { theme, basket } = useStateContext();

    const darkTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    useEffect(() => {
        if (user) {
            dispatch(setUserAction(user))
        }
    }, [user])

    useEffect(() => {
        const darkMode = !!localStorage.getItem('theme');

        if (darkMode)
            dispatch(setDarkModeAction());

    }, [localStorage.getItem('theme')])

    return (
        <ThemeProvider theme={darkTheme}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="register" element={<Register />}>
                    <Route index element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                    <Route path='change-password' element={<ChangePassword />} />
                </Route>
                <Route path="basket" element={<Basket />} />
                <Route path="basket/checkout"
                    element={
                        <PrivateRoute>
                            <Checkout />
                        </PrivateRoute>}>
                </Route>
                <Route path="products/:productID/:productName" element={<ProductsBlog />} />
                <Route path="categories/:category" element={<Categories />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App;