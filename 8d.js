'use strict'
const firstProduct={
    nameOfProduct:'apple',
    priceOfProduct: 500
}
const secondProduct={
    nameOfProduct:'banana',
    priceOfProduct: 600
}
function comparison(){
    if(firstProduct.priceOfProduct > secondProduct.priceOfProduct){
        console.log(secondProduct)
    }
    else if(firstProduct.priceOfProduct < secondProduct.priceOfProduct){
        console.log(firstProduct)
    }
    else{
        console.log('=')
    }
}
comparison()