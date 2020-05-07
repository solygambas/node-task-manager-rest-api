// callback syntax
// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//       // callback('This is my error!', undefined)
//       callback(undefined, [1, 4, 7]);
//     }, 2000);
//   };

//   doWorkCallback((error, result) => {
//     if (error) {
//       return console.log(error);
//     }

//     console.log(result);
//   });

// promise syntax
// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//     // reject("failed");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// promise chaining
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
      // reject("failed");
    }, 200);
  });
};

add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => console.log(sum2))
  .catch((error) => console.log(error));
