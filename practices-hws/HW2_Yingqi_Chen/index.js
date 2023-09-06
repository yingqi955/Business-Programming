const dessert1 = {
  name: 'Cookies & Cream Hero Cake',
  description: 'Three layers of chocolate and three layers of vanilla cake filled with cookies and cream mousse and iced with alternating stripes of mousse and buttercream. Coated with chocolate ganache and then garnished with sandwich cookies, chocolate bars, and chocolate pieces.',
  price: 35

}
// console.log(dessert1)
const dessert2 = {
  name: 'Strawberry Covered Chocolate Cake',
  description: 'Six layer of chocolate cake filled with ganache then iced in strawberry buttercream. Garnished with ganache, chocolate   dipped strawberries, fudge icing, chocolate pieces, and macarons.',
  price: 16
}
// console.log(dessert2)
const dessert3 = {
  name: 'Bundtini',
  description: 'Miniature Bundtlets are individually packaged and come in a variety of flavors, including our seasonal Featured Flavor.',
  flavors: 'Flavors: Carrot,Chocolate Chip,Classic Vanilla,Confetti,Lemon,Marble,Pecan Praline,Red Velvet,Pumpkin Spice,White Chocolate Raspberry',
  price: 4
}
// console.log(dessert3)

const dessertList = [dessert1, dessert2, dessert3]
// console.log(dessertList)
console.log('======FOOD INTELLIGENCE ITEM LIST======')
for (let i = 0; i < dessertList.length; i++) {
  console.log(`
    name: ${dessertList[i].name}
    description: ${dessertList[i].description}
    price: $${dessertList[i].price}`)
  if (dessertList[i] === dessert3) {
    console.log(
      `    flavors: ${dessertList[i].flavors}`)
  }
}

const qlist1 = [2, 8, 4]
const qlist2 = [3, 112, 0]
const cart1 = {
  products: dessertList,
  quantity: qlist1,
  total: 0
}
const cart2 = {
  products: dessertList,
  quantity: qlist2,
  total: 0
}
const cartList = [cart1, cart2]

for (let i = 0; i < cartList.length; i++) {
  console.log(`
  ======CART ${i + 1} TOTAL======`)
  for (let j = 0; j < dessertList.length; j++) {
    console.log(`${cartList[i].products[j].name}: qty ${cartList[i].quantity[j]} @ $${cartList[i].products[j].price} per item`)
  }
  for (let j = 0; j < dessertList.length; j++) {
    cartList[i].total = cartList[i].total + cartList[i].products[j].price * cartList[i].quantity[j]
  }
  console.log(`The cart total is $${cartList[i].total}`)
}
