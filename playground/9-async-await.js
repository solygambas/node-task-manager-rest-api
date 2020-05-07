// const doWork = async () => {
//   throw new Error("Something went wrong");
//   return "Andrew";
// };

// doWork()
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }
      resolve(a + b);
      // reject("failed");
    }, 200);
  });
};

const doWork = async () => {
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum2, -3);
  return sum3;
};

doWork()
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
