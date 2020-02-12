// 出版社维护很多类型的作者
// es5
// let authors = {
//   allAuthors: {
//     fiction: ['Agla', 'Skks', 'Lp'],
//     scienceFiction: ['Neal', 'Arthru', 'Ribert'],
//     fantasy: ['J.R.Tole', 'J.M.R']
//   },
//   Address: []
// }
// let r = []
// for (let [, v] of Object.entries(authors.allAuthors)) {
//   r = r.concact(v)
// }
// console.log(r)

// let authors = {
//   allAuthors: {
//     fiction: ['Agla', 'Skks', 'Lp'],
//     scienceFiction: ['Neal', 'Arthru', 'Ribert'],
//     fantasy: ['J.R.Tole', 'J.M.R']
//   },
//   Address: []
// }

// // 可遍历接口——es6
// authors[Symbol.iterator] = function () {
//   // 输入：this
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)// 拿到所有的keys，fiction、scienceFiction、fantasy
//   let values = []
//   // 输出是一个对象，对象里有next()，next返回一个对象
//   return {
//     next () { // 类似遍历一个二维数组
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]
//           keys.shift()// 第一次是fiction,取到它的值后把它剔除，scienceFiction现在变成第一个啦。
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// let r = []
// for (let v of authors) {
//   r.push(v)
// }
// console.log(r)// ["Agla", "Skks", "Lp", "Neal", "Arthru", "Ribert", "J.R.Tole", "J.M.R"]

// function * gen () { // 迭代器协议
//   let val
//   val = yield * [1, 2, 3]
//   console.log(val)
// }
// const l = gen()
// console.log(l.next())
// console.log(l.next())

// generator +iternator

let authors = {
  allAuthors: {
    fiction: ['Agla', 'Skks', 'Lp'],
    scienceFiction: ['Neal', 'Arthru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R']
  },
  Address: []
}

authors[Symbol.iterator] = function * () {
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)// 拿到所有的keys，fiction、scienceFiction、fantasy
  let values = []
  while (1) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]]
        keys.shift()
        yield values.shift()
      } else {
        return false
      }
    } else {
      yield values.shift()
    }
  }
}

let r = []
for (let v of authors) {
  r.push(v)
}
console.log(r)// ["Agla", "Skks", "Lp", "Neal", "Arthru", "Ribert", "J.R.Tole", "J.M.R"]
