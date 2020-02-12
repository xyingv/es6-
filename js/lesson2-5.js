// let obj = {
//   x: 1,
//   y: 2
// }
// es5 变量输入到对象里
// let x = 1; let y = 2; let z = 3
// let obj = {
//   'x': x,//静态变量
//   y: y
// }
// obj[z]=5//3:5

// // es6对象属性简写
// let x = 1; let y = 2; let z = 3
// let obj = {
//   x,
//   y, // 可以简写
//   [z]: 6, // 输出:3:6
//   [z + y]: 7,
//   hello () { // 方法简写,常规函数
//     console.log('hello')
//   },
//   * hello1 () { // 异步函数，没有执行
//     console.log('hello')
//   }

// }
// console.log(obj)

/** *set存储数据****/
// set存储的数据时唯一的，创建的是可遍历对象
// let s = new Set([1, 2, 3, 4, 5])// s的函数是可遍历对象，不一定只是数组

// let s = new Set()// 声明未初始化
// s.add('hello')

// let s = new Set()
// // s.add('hello').add('goodbye')
// // console.log(s) // hello goodbye
// s.add('hello').add('goodbye').add('hello')
// console.log(s)// hello goodbye

// s.delete('hello')// 删某一个
// s.clear()// 全部删除

// console.log(s.has('hello'), s.size)// 查找：是否有hello，是true。size为长度

// console.log(s.keys())// 返回键{"hello","goodbye"}
// console.log(s.value)// 返回值{"hello","goodbye"}
// console.log(s.entries())// 返回键值对{"hello"=>"hello","goodbye"=>"goodbye"}
// // s.forEach(item => {
// //   console.log(item)//查找所有值
// // })
// for (let item of s) {
//   console.log(item)// 查找所以值
// }

/** **map*****/
// let map = new Map([1, 2], [3, 4], [5, 6])// key:value,key可以是任意值（函数、对象等等）。//可以穿可遍历对象,但对传入的元素有限制
// console.log(map)

// let map = new Map()
// map.set(1, 2)// 可增加也可修改
// map.set(3, 4)
// console.log(map)// {1 => 2, 3 => 4}
// map.set(1, 3)
// console.log(map)// {1 => 3, 3 => 4}

// map.delete(1)
// map.clear()

// console.log(map.size)
// console.log(map.has(1))// 查索引值key是否存在
// console.log(map.get(1))// 查索引值key1对应的value
// console.log(map.keys(), map.values(), map.entries)// 所有key，所有value,所有键值对

// // 注：可遍历对象：都能使用forEach
// // map.forEach((value, key) => {
// //   console.log(value, key)
// // })

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// let o = function () {
//   console.log('o')
// }
// map.set(o, 4)
// console.log(map.get(o))

/** **对象拷贝*****/
// const target = {}
// const source = { b: 4, c: 5 }
// Object.assign(target, source)
// console.log('target', target)// { b: 4, c: 5 }
// console.log('source', source)// { b: 4, c: 5 }

// Object.assign有缺陷的
const target = {
  a: {
    b: {
      c: {
        d: 9
      }
    }
  },
  e: 8,
  f: 6,
  h: 10
}
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  },
  e: 2,
  f: 3
}
Object.assign(target, source)// source的值完全拷贝到target了，但是target没有h的值了——浅复制，会出现数据丢失
console.log('target', target)
console.log('source', source)
