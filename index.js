var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//--------------FUNCTION 1- ADD TO CART -------------------------

function addToCart(item){
//let fin  = `${item} has been added to your cart.`
//console.log(cart)
let price = Math.floor(Math.random()*100)

let itemObj = {
  itemName: item,
  itemPrice: price
}
cart.push(itemObj)

//console.log(item + " has been added to your cart. ")
return `${item} has been added to your cart.`
}

// --------------FUNCTION 2- VIEW CART -------------------------
function viewCart(){
  
  let partSen = [];

  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }

  for(let i = 0; i < cart.length; i++){
    //console.log( Object.values(cart))
      let vals = Object.values(cart[i]);

    partSen.push(` ${vals[0]} at $${vals[1]}`);
    partSen.join(',');
    //console.log(partSen )

  }return `In your cart, you have${partSen}.`;
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
