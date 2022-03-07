// const fruits = ["manggo", "orange"]
// const buahbuahan = ["apple", ...fruits, "melon", "pineapple"]
// console.log(buahbuahan)

const data = {
  name: "iwan",
  address: "jaksel"
}

const biodata = {
  ...data,
  name: "heru", // note: jika key sama, maka value akan di replace
  hobbies: "coding, membaca, renang",
}

console.log(biodata)