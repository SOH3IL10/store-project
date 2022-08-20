import Checkout from "./Pages/Checkout";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ProductsBlog from "./Pages/ProductsBlog";
import Register from "./Pages/Register";
import Categories from "./Pages/Categories";
import { useUserData } from "@nhost/react";
import { useDispatch } from "./Context/Context";
import { actionTypes } from "./Context/reducer";

function App() {
    const user = useUserData();
    const dispatch = useDispatch();

    if (user) {
        dispatch({
            type: actionTypes.SET_USER,
            payload: {
                user: user
            }
        })
    }
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<Register />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="products/:productID" element={<ProductsBlog />} />
            <Route path="categories/:category" element={<Categories />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;