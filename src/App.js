import Checkout from "./Pages/Checkout";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ProductsBlog from "./Pages/ProductsBlog";
import Register from "./Pages/Register";
import Categories from "./Pages/Categories";

function App() {
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