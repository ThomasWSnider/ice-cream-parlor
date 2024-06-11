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

  // let orderContent = `You have ordered  with ${toppings[i].name} on a ${vessels[i].name}`

  let flavorContent = ``

  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i]
    if (flavor.quantity > 0) {
      flavorContent += `${flavor.quantity} scoops of ${flavor.name}, `
    }
  }

  let toppingsContent = ``

  for (let i = 0; i < toppings.length; i++) {
    const topping = toppings[i]
    if (topping.quantity > 0) {
      toppingsContent += `with ${topping.name}`
    }
  }

  let vesselContent = ``

  for (let i = 0; i > vessels.length; i++) {
    const vessel = vessels[i]
    if (vessel.quantity > 0) {
      vesselContent += `on a ${vessel.name}`
    }
  }

  console.log(vesselContent);
}