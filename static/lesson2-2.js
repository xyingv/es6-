// {
//   let a = 1//let定义块状作用域中
//   console.log(a)
// }
// var b = 5
// let c = 4
// console.log(b, c)
// console.log(window.b, window.c)//5，undefined

// var b = 4
// let c = 5//let不能重复定义

// const d = 2
// d = 3//const不能修改
// const e
// e = 4
// const不能先定义后赋值

// for (let i=0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 100)
// }//输出0 1 2

// console.log(a)//没有定义a
// let a = 1
