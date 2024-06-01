import products from "./products"

const productName: string = "beanie"
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "1234 Butthead Street"

const product = products.filter((product) =>{
  if(product.name === productName){
    return true;
  }
  return false;
})[0]

if(Number(product.price) > 25){
  shipping= 0;
}else{
  shipping = 5;
}

if(shippingAddress.match("New York")){
  taxPercent = 0.1;
}else{
  taxPercent = 0.05;
}

total = Number(product.price) * taxPercent + Number(product.price) + shipping

if(Boolean(product.preOrder) === true){
  console.log("Preoder, we will send message when availible")
}

console.log(`You purchased ${product.name} to ${shippingAddress}
             you paid ${total} with ${Number(product.price)*taxPercent} in tax, and ${shipping} in shipping`)
