// 参数默认值
// es5
// function f (x, y, z) { // x必选，yz可选提供默认值
//   if (y === undefined) {
//     y = 2
//   }
//   if (z === undefined) {
//     z = 42
//   }
//   return x + y + z
// }
// console.log(f(1, 3))
// // es6
// function f (x, y = 7, z = x + y) { // 没有默认值往前写，有往后写
//   console.log(Array.from(f.length))// es6禁止使用arguments;f.length能获取没有默认值的参数个数。
//   return x + y + z
// }
// console.log(f(6, 3))
// console.log(f(6, undefined, 3))

// 不确定参数
// es5
// function sum () {
//   let num = 0
//   //   Array.prototype.forEach.call(arguments, function (item) {
//   //     num += item * 1
//   //   })

//   Array.from(arguments).forEach(function (item) {
//     num += item * 1
//   })
//   return num
// }

// // es6
// function sum (base, ...nums) { // Rest parameter所有参数都放到nums里
//   let num = 0
//   nums.forEach(function (item) {
//     num += item * 1
//   })
//   return base * 2 + num
// }
// console.log(sum(1, 2, 3))

// es5
// function sum (x = 1, y = 2, z = 3) { // 参数确定，但传入数组
//   return x + y + z
// }
// let data = [4, 5, 6]
// console.log(sum(data[0], data[1], data[2]))
// console.log(sum.apply(this, data))
// console.log(sum(...data))// sprea操作

// 声明函数
// function hello () {}
// let hello =function () {}
// let hello = (name, city) => { // 没有参数或者大于1个参数()不能省略，但是只要一个参数()可以省略
//   console.log('hello world')
// }

// let hello = (x, y, z) => x + y + z // 返回表达式{}可以省略，返回对象要用()括起来，其他老老实实
// let hello = (x, y, z) => ({
//     x:x,
//     y:y,
//     z:z
// })
// //记不清楚就老老实实写
// let hello = (x, y, z) => {
//   return {
//     x:x,
//     y:y,
//     z:z
//     }
// }

// this
// let test = {
//   name: 'test',
//   say: function () {//谁调用函数this指向谁
//     console.log(this.name)
//   }
// }
// test.say()// test

// let test = {
//   name: 'test',
//   say: () => { // 定义的时候this指向谁就是谁
//     console.log(this.name)
//   }
// }
// test.say()// undefined

// var arr = [11, 2, 23, 14]
// function compareId (val1, val2) {
//   return val1 - val2
// }
// var result = arr.sort(compareId)
// console.log(result)

var arr = [11, 2, 23, 14]
arr.sort((a, b) => {
  return a - b
})
console.log(arr)
