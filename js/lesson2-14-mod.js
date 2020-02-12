// 导出变量、函数、类、对象
// 导出变量1
// export const name = 'hello'
// export let addr = 'Beijing'
// export var list = [1, 2, 3]

// 导出变量2
// const name = 'hello2'
// let addr = 'Beijing'
// var list = [1, 2, 3]

// export default name
// export {
//   addr,
//   list
// }

// 函数1
// export function say (content) {
//   console.log(content)
// }
// 函数2
// const say = (content) => {
//   console.log(content)
// }
// export {
//   say
// }

// 对象1
// export default {
//   code: 0,
//   message: 'success'
// }
// 对象2
// const data1 = {
//   code: 1,
//   message: 'Beijing'
// }
// const data2 = {
//   code: 2,
//   message: 'Heinan'
// }
// export default {
//   data1,
//   data2
// }

// 类1
// class Test {
//   constructor () {
//     this.id = 2
//   }
// }
// export {
//   Test
// }
// export default Test

// 类2
// export class Test {
//   constructor () {
//     this.id = 5
//   }
// }

// export default class {
//   constructor () {
//     this.id = 6
//   }
// }

// 多个类导出
// class Test1 {
//   constructor () {
//     this.id = 1
//   }
// }
// class Test2 {
//   constructor () {
//     this.id = 2
//   }
// }
// class Test3 {
//   constructor () {
//     this.id = 3
//   }
// }
// export {
//   Test1,
//   Test2,
//   Test3
// }
// export default class People {
//   constructor () {
//     this.id = 4
//   }
// }

// 函数中调用函数
export function say () {
  console.log('111')
}
export function run () {
  say()
}
