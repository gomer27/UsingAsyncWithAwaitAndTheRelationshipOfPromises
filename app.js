// async function test(data) {
//   // Promise return new Promise
//   return new Promise((resolve, reject) => {
//     resolve(data);
//   });
// }

// console.log(test("Merhaba"));

///////////////////////////////////////////////

// async function test(data) {
//   // Promise return new Promise
//   return data;
// }

// test("Merhaba").then((response) => console.log(response));

//////////////////////////////////////////////////

// async function test(data) {
//   // Promise return new Promise
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Bu bir değerdir");
//     }, 3000);
//   });
//   let response = await promise; // 3 saniye bekleyecek.
//   console.log(response);
//   console.log("Naber");
// }

////////////////////////////////////////////////////

// async function testData(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("Lütfen string bir değer girin..."));
//       }
//     }, 3000);
//   });

//   const response = await promise;
//   return response;
// }

// testData(25)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//////////////////////////////////////////////////////

async function getCurrency(url) {
  const response = await fetch(url); // Response Object
  const data = await response.json(); // Json Object
  return data;
}
getCurrency("https://api.exchangeratesapi.io/latest454545").then((data) =>
  console.log(data)
);
