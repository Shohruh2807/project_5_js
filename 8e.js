'use strict'
const firstProduct={
    nameOfProduct:'pen',
    priceOfProduct: 500
}
const secondProduct={
    nameOfProduct:'pencil',
    priceOfProduct: 600
}
function isSameProduct(){
    if (firstProduct.nameOfProduct === secondProduct.nameOfProduct && firstProduct.priceOfProduct === secondProduct.priceOfProduct){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
isSameProduct()