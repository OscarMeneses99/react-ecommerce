export const priceTotal = (products) => {
    let sum = 0
    products.forEach((product) => {
        sum += product.price
    })
    return sum
}