//---------------------------------------------------//
//                  The Data                         //
//---------------------------------------------------//

let personArr = ["Shauli", ["eating", "complaining"]];
// index 0 for the name, index 2 for hobbies
const person = {
  name: "Shauli",
  hobbies: ["eating", "complaining"],
  address: {
    city: "Tel Aviv",
    state: "Israel",
  },
  age: 50,
  images: [
    "https://theatron-hazafon.co.il/FilesSrc/Galleries/Galley37/Pic3155.png",
    "https://dugo.co.il/wp-content/uploads/2021/10/DSC02567-495x320.jpg",
  ],
};

// let title = `Welcome ${person.name}, I like ${hobbies[1]} too!}`;
// let title2 = `Welcome ${personArr[0]}, I like ${personArr[0][1]} too!}`;

// acess to state: person.address.state = "Israel"
// acess to second hobby:
// let personHobbies = person.hobbies;
// console.log(hobbies[1]);
// person.hobbies[1] = "complaining";
//

//---------------------------------------------------//
//                  Access the data                  //
//---------------------------------------------------//

console.log(person["name"]);
//or
console.log(person.name);

console.log(
  `Hello my name is ${person.name} and im from ${person.address.city}`
);

console.log(`Hello my name is ${person.name} and im ${person.age} years old`);
//array inside an object
console.log(person.images);
console.log(person.images[0]);
console.log(person.address.state);

//---------------------------------------------------//
//                Modifying Objects                  //
//---------------------------------------------------//

// person.email = "john@example.com"; // add a new property
// person.age = 31; // modify an existing property
// console.log(person);
// delete person.hobbies; // delete a property
// console.log(person);

//---------------------------------------------------//
//                Objects & Loops                    //
//---------------------------------------------------//

//Objects and for loops
//person.images = ["img1","img2","img3","img4","img5"]
for (let index = 0; index < person.images.length; index++) {
  const element = person.images[index];
  console.log(element);
}

//---------------------------------------------------//
//                Array of Object                    //
//---------------------------------------------------//
const arrayOfPerson = [
  { id: 1, name: "Zoya", age: 40 },
  { id: 2, name: "Idan", age: 40 },
  { id: 3, name: "Bob", age: 30 },
];

console.log(arrayOfPerson);
console.log(arrayOfPerson[1]); // { id: 2, name: "Idan", age: 40 }
console.log(arrayOfPerson[1].id); // 2

for (let i = 0; i < arrayOfPerson.length; i++) {
  console.log(arrayOfPerson[i].id + "," + arrayOfPerson[i].name);
}

//---------------------------------------------------//
//                Advance Examples                  //
//---------------------------------------------------//

// const advanceObject = {
//   name: "Shauli",
//   age: 50,
//   hobbies: ["eating", "complaining"],
//   address: {
//     city: "Tel Aviv",
//     state: "Israel",
//   },
//   contact: {
//     phoneNumbers: {
//       home: ["054535345", "05245345345"],
//       work: ["0544434524", "050324234"],
//     },
//     email: ["test@ef.com", "gmail@gmial.com"],
//   },
//   images: [
//     "https://theatron-hazafon.co.il/FilesSrc/Galleries/Galley37/Pic3155.png",
//     "https://dugo.co.il/wp-content/uploads/2021/10/DSC02567-495x320.jpg",
//   ],
// };

// //get the home second phone number of Shauli
// console.log(advanceObject.contact.phoneNumbers.home[1]);
// //get the emails of Shauli
// console.log(advanceObject.contact.email);

const shoppingCart = {
  items: [
    { name: "Milk", price: 3, quantity: 1 },
    { name: "Eggs", price: 4, quantity: 10 },
    { name: "Bread", price: 2, quantity: 1 },
  ],
  total: function () {
    let sum = 0;
    for (let i = 0; i < shoppingCart.items.length; i++) {
      sum += shoppingCart.items[i].price * shoppingCart.items[i].quantity;
      // (i=0)
      //  sum = 0 + 3 * 1
      // (i = 1)
      // sum = 3 + 4 * 10
      // ..
      // ..
    }
    return "this is my sum: " + sum;
  },
};

// let test = shoppingCart.total();
console.log(shoppingCart.total());

const advancePerson = {
  name: "Shauli",
  age: 50,
  hobbies: ["eating", "complaining"],
  address: {
    city: "Tel Aviv",
    state: "Israel",
  },
  images: [
    "https://theatron-hazafon.co.il/FilesSrc/Galleries/Galley37/Pic3155.png",
    "https://dugo.co.il/wp-content/uploads/2021/10/DSC02567-495x320.jpg",
  ],
  sayHello: function () {
    console.log(
      `Hello my name is ${person.name} and im from ${person.address.city}`
    );
  },
};

advancePerson.sayHello();
