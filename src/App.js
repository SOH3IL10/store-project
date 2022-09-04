import Basket from "./Pages/Basket";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ProductsBlog from "./Pages/ProductsBlog";
import Register from "./Pages/Register";
import Categories from "./Pages/Categories";
import { useUserData } from "@nhost/react";
import { useDispatch, useStateContext } from "./Context/Context";
import { actionTypes } from "./Context/reducer";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ChangePassword from "./Pages/Register/Components/ChangePassword";
import Login from "./Pages/Register/Components/Login";
import SignUp from "./Pages/Register/Components/SignUp";
import ResetPassword from "./Pages/Register/Components/ResetPassword";
import Checkout from "./Pages/Basket/Components/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute";
import getBasketSubtotal from "./Utils/BasketTotal/getBasketTotal";
import { createPaymentIntent } from "./Services/HttpClient";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
    const user = useUserData();
    const dispatch = useDispatch();
    const { theme, basket } = useStateContext();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const total = getBasketSubtotal(basket);

        const data = JSON.stringify({ items: { id: "total", price: parseFloat(total.toFixed(2)) } })

        createPaymentIntent('/create-payment-intent', data,)
            .then(data => setClientSecret(data.clientSecret))

    }, [basket]);

    const appearance = {
        theme: theme === 'dark' ? 'night' : 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    const darkTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    useEffect(() => {
        if (user) {
            dispatch({
                type: actionTypes.SET_USER,
                payload: {
                    user: user
                }
            })
        }
    }, [user])

    useEffect(() => {
        const darkMode = !!localStorage.getItem('theme');
        if (darkMode) {
            dispatch({
                type: actionTypes.SET_DARK_MODE
            })
        }
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
                            {
                                clientSecret &&
                                <Elements options={options} stripe={stripePromise}>
                                    <Checkout  />
                                </Elements>
                            }
                        </PrivateRoute>}>
                </Route>
                <Route path="products/:productID" element={<ProductsBlog />} />
                <Route path="categories/:category" element={<Categories />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App;