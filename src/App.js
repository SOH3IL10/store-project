import Checkout from "./Pages/Checkout";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import ProductsBlog from "./Pages/ProductsBlog/ProductsBlog";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="products/:productID" element={<ProductsBlog />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;