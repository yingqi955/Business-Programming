
Author: <Yingqi Chen>
MGT 3745 B

Fall 2023

# Homework 2

## Scenario:
Food Intelligence (FI) currently sells desserts to the public. However, potential FI customers can't see any desserts information (e.g., name, price, description, flavors), nor can they see the total price of desserts in their shopping carts. Ideally, customers can benefit from seeing the entire dessert menu printed with names, descriptions, and individual prices. Customers can benefit from seeing the total price of items in their cart printed, excluding tax. Food Intelligence would like the solution to match standard javascript styling (e.g., use lint commands to style/fix your code).

## Instructions: 
Using the dessert information below and computational thinking, develop algorithms which can be encoded and run as standard JavaScript code in the **index.js** file and fulfills the following desirable results:

- Create a manageable list of desserts which includes the name, description, flavors, and price of each dessert
- Print the name, description, and price of all three dessert options in the list of desserts
- Calculate and print the total price of a cart based on the quantities of each dessert. While the two carts listed below are specific cases, the solution should work for any quantity of any dessert.

### Cart 1
  - Quantity 2 Cookies & Cream Hero Cake
  - Quantity 8 Strawberry Covered Chocolate Cake
  - Quantity 4 Bundtini
  
### Cart 2
  - Quantity 3 Cookies & Cream Hero Cake
  - Quantity 112 Strawberry Covered Chocolate Cake
  - Quantity 0 Bundtini

### Desserts
- Cookies & Cream Hero Cake
  - Three layers of chocolate and three layers of vanilla cake filled with cookies and cream mousse and iced with alternating stripes of mousse and buttercream. Coated with chocolate ganache and then garnished with sandwich cookies, chocolate bars, and chocolate pieces.
  - $35

- Strawberry Covered Chocolate Cake
  - Six layer of chocolate cake filled with ganache then iced in strawberry buttercream. Garnished with ganache, chocolate dipped strawberries, fudge icing, chocolate pieces, and macarons.
  - $16

- Bundtini
  - Miniature Bundtlets are individually packaged and come in a variety of flavors, including our seasonal Featured Flavor.
  - Flavors: Carrot,Chocolate Chip,Classic Vanilla,Confetti,Lemon,Marble,Pecan Praline,Red Velvet,Pumpkin Spice,White Chocolate Raspberry
  - $4

Example of desired results:
```
======FOOD INTELLIGENCE ITEM LIST======
name: Cookies & Cream Hero Cake
description: Three layers of chocolate and three layers of vanilla cake filled with cookies and cream mousse and iced with alternating stripes of mousse and buttercream. Coated with chocolate ganache and then garnished with sandwich cookies, chocolate bars, and chocolate pieces.
price: $35
        
name: Strawberry Covered Chocolate Cake
description: Six layer of chocolate cake filled with ganache then iced in strawberry buttercream. Garnished with ganache, chocolate dipped strawberries, fudge icing, chocolate pieces, and macarons.
price: $16
        
name: Bundtini
description: Miniature Bundtlets are individually packaged and come in a variety of flavors, including our seasonal Featured Flavor.
price: $4
flavors: Carrot,Chocolate Chip,Classic Vanilla,Confetti,Lemon,Marble,Pecan Praline,Red Velvet,Pumpkin Spice,White Chocolate Raspberry
        

======CART 1 TOTAL======
Cookies & Cream Hero Cake: qty 2 @ $35 per item
Strawberry Covered Chocolate Cake: qty 8 @ $16 per item
Bundtini: qty 4 @ $4 per item
The cart total is $<insert total here>

======CART 2 TOTAL======
Cookies & Cream Hero Cake: qty 3 @ $35 per item
Strawberry Covered Chocolate Cake: qty 112 @ $16 per item
Bundtini: qty 0 @ $4 per item
The cart total is $<insert total here>
```