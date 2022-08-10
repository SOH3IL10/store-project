import Checkout from "./Pages/Checkout";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="checkout" element={<Checkout />} />
        </Routes>
    )
}

export default App;