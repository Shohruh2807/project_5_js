'use strict'
const productsOfAmazon={
    nameOfProduct:'basketball',
    priceOfProduct: 2095
}
productsOfAmazon.priceOfProduct=productsOfAmazon.priceOfProduct + 500
console.log(productsOfAmazon)
productsOfAmazon['deliveryTime'] = "3 days"
console.log(productsOfAmazon)