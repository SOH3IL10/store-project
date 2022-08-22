import Checkout from "./Pages/Checkout";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ProductsBlog from "./Pages/ProductsBlog";
import Register from "./Pages/Register";
import Categories from "./Pages/Categories";
import { useUserData } from "@nhost/react";
import { useDispatch, useStateContext } from "./Context/Context";
import { actionTypes } from "./Context/reducer";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
    const user = useUserData();
    const dispatch = useDispatch();
    const { theme } = useStateContext();

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
            // document.body.classList.add('dark-theme');
            dispatch({
                type: actionTypes.SET_DARK_MODE
            })
        }
        // localStorage.getItem('theme') && document.body.classList.add('dark-theme') 
    }, [localStorage.getItem('theme')])

    return (
        <ThemeProvider theme={darkTheme}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="register" element={<Register />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="products/:productID" element={<ProductsBlog />} />
                <Route path="categories/:category" element={<Categories />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App;