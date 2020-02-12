// //for 循环
// const arr = [1,2,3,4,5]
// for (let i = 0; i<arr.length; i++) {
//   console.log(arr[i])
// }

// arr.forEach(function (item) {
//   console.log(item)
// })//1 2 3 4 5

// const arr = [1,2,3,4,5]
// for (let i = 0; i<arr.length; i++) {
//     if(arr[i]==2){
//       break
//     }
//   console.log(arr[i])
// }

// arr.forEach(function (item) {
//     if(item===2){
//       break//forEach里的break与contin失效
//     }
//   console.log(item)
// })

// const arr = [1,2,3,4,5]
// arr.every(function (item) {
//   console.log(item)//every遇见true就结束
// })//1

// arr.every(function (item) {
//     console.log(item)
//     return true//能遍历全部了
//   })//1 2 3 4 5
// arr.every(function (item) {
//   if(item===2){
//     return false//return false相当于break
//   }
//   console.log(item)
//   return true//能遍历全部了
// })

// arr.every(function (item) {
//     if(item===2){
//       return true//此处return true或者为空相当于continue,
//     } else {
//       console.log(item)
//       return true
//     }
//   })

// for in 
// const arr=[1,2,3,4,5]
// arr.a = 8
// for (let index in arr) {//for in 为对象服务，如果遍历对象，会有瑕疵
//   console.log(index, arr[index])
// }

// const arr=[1,2,3,4,5]
// for (let index in arr) {
//     if (index==2) {//index === 2就不跳过，因为index是字符串,可index*1 === 2转换成数值
//       continue//支持continue与break
//     }
//   console.log(index, arr[index])
// }

// const Price = {
//   A: [1.5, 2.4, 3.4],
//   B: [1.5, 2.4, 3.4],
//   C: [1.5, 2.4, 3.4]
// }
// for (letkey of Price) {
//   console.log(key, Price[key])
// }

/* **********第二小节 转换***********/
// es5
// let args=[].slice.call(arguments)//arguments
// let imgs=[].slice.call(document.querySelectorAll('img'))//NodeList
// console.log(args)

// //es6
// Array.from(arrayLike,mapFn,thisArg)
// let args=Array.from(arguments)
// let imgs=Array.from(document.querySelectorAll('img'))

// //let array = Array(5)

// //伪数组：{0:’a’,1:’b’,length:2}
// let array = Array.from({ length: 5},function () {return 1})
// console.log(array)//1 1 1 1 1

/* **********第三小节 生成新数组***********/
// es5
// let array = Array(5)
// let array = ['', '']

// es6
// Array.from
// Array.prototype.of
// Array.prototype.fill

// let array = Array.of(1,2,3,4,5)//不需要再push
// console.log(array)

// Array.fill(value,start,end)
// let array = Array(5).fill(1)
// console.log(array)//1 1 1 1 1

// //替换
// let array = [1,2,3,4,5]
// console.log(array.fill(1,2,4))//1,2,1,1,5

/* **********第四小节 查找********** */
// es5
// let array = [1,2,3,4,5]
// let find=array.filter(function(item) {
//   return item ===6
// })
// console.log(find)//[] 返回数组

// //es6
// let array = [1,2,3,4,5]
// let find=array.find(function(item) {
//   return item === 6
// })
// console.log(find)// undefined 

// let array = [1,2,3,4,5]
// let find=array.find(function(item) {
//   return item % 2=== 0
// })
// console.log(find)//2 find只要符合立即返回值并停止, findIndex立即返回位置并停止