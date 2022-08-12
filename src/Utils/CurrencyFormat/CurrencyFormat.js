

export default function currencyFormat(number) {
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);

    return currency;
}