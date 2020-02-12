// 闭包
// function val () {
//   var hi = 'hello'
//   function sum () {
//     console.log(hi)
//   }
//   return sum()
// }
// val()

// foreach
// const arr = [1, 2, 3, 4, 5]
// arr.forEach(function (item) {
//   console.log(item)
// })

// every
// const arr = [1, 2, 3, 4, 5]
// arr.every((item) => {
//   console.log(item)
//   return true
// })

// const arr = [1, 2, 3, 4, 5]
// arr.every((item) => {
//   if (item === 2) {
//     return true
//   } else {
//     console.log(item)
//     return true
//   }
// })

// for in
const arr = [1, 2, 3, 4, 5]
for (let i in arr) {
  console.log(i, arr[i])
}
