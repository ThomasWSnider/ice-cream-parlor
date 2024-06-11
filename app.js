// ANCHOR vessel array
const vessels = [{
  name: 'Chalice',
  price: 6,
  quantity: 0
},
{
  name: 'Waffle Cone',
  price: 2,
  quantity: 0
},
{
  name: 'Dipped Waffle',
  price: 4,
  quantity: 0
}]
// ANCHOR flavor array
const flavors = [{
  name: 'Cookie Dough',
  price: 0,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 0,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 0,
  quantity: 0
}]
// ANCHOR toppings array
const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .75,
  quantity: 0
},
{
  name: 'Oreos',
  price: 1,
  quantity: 0
}]

// ANCHOR vessel functions
function orderVessel(vesselIndex) {
  for (let i = 0; i < vessels.length; i++) {
    if (vesselIndex == vessels[i].name) {
      vessels[i].quantity++
      console.log(`${vessels[i].name}, ${vessels[i].quantity}!`);
    }
  }
}

// ANCHOR flavor functions
function orderFlavor(flavorIndex) {
  for (let i = 0; i < flavors.length; i++) {
    if (flavorIndex == flavors[i].name) {
      flavors[i].quantity++
      console.log(`${flavors[i].name}, ${flavors[i].quantity} scoops!`);
    }
  }
}

// ANCHOR toppings functions
function orderToppings(toppingsIndex) {
  for (let i = 0; i < toppings.length; i++) {
    if (toppingsIndex == toppings[i].name) {
      toppings[i].quantity++
      console.log(`${toppings[i].name}, ${toppings[i].quantity}`);
    }
  }
}

// ANCHOR draw function
function draw() {
  const cartElem = document.getElementById('cart')
  let orderContent = ``
  cartElem.innerText = ``
}