


export function sortByStar(products) {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate))

    return productsCopy;
}

export function sortByNameA_Z(products) {
    const productsCopy = [...products];
    productsCopy.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

    return productsCopy;
}

export function sortByNameZ_A(products) {
    const productsCopy = [...products];
    productsCopy.sort((a,b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))

    return productsCopy;
}

export function sortByPriceHigh_Low(products) {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))

    return productsCopy;
}

export function sortByPriceLow_High(products) {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

    return productsCopy;
}