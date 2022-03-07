// const data = {
//   // key/property : value
//   productName: "shampoo",
//   price: 20000,
//   merk: "Clear"
// }

// const { productName, merk } = data

// console.log(productName)
// console.log(merk)

const cars = ["BMW", "Toyota", "Tesla"]

// const [a, b, mobil3] = cars
// console.log(mobil3)

const products = [
  {
    name: "indomie",
    price: 3000
  },
  {
    name: "sarimi",
    price: 2500
  },
  {
    name: "supermie",
    price: 2800
  }
]

// const [a, b, c] = products
// const { name } = c
// console.log(name)

const biodata = {
  name: "Dani",
  address: "Surabaya",
  gender: "male",
  isMarried: false,
  hobbies: ["memancing", "ngoding", "ngopi", "dll"]
}

// const { hobbies } = biodata
// const [a, b, c] = hobbies
// console.log(b)

const fruits = [ ["rambutan", "durian"], ["apple", "peach"] ]
const [c, d] = fruits[0]
console.log(d)

const data = {
  fullname: "darto",
  detail: {
    firstname: "dar",
    lastname: "to"
  }
}

const {firstname} = data.detail
console.log(firstname)