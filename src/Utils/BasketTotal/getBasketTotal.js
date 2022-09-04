

export default function getBasketSubtotal(products) {
    const total = products.reduce((amount, item) => amount + item.price * item.quantity, 0)

    return Number(total);
}