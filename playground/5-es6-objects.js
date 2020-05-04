// object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
  name, // name: name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

// object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label
// const price = product.price

// const { label, price } = product;
const { label: productLabel, price, rating = 5 } = product;
// rename a key :
// give a default value =

// console.log(productLabel, price, rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
