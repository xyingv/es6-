// es5
// function loop () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// loop()// 只要满足就一定会用，不受控

// // es6——让遍历停下来
// function * loop () {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }

// const l = loop()
// l.next()// 0 调用一次l执行一次
// l.next()// 1
// l.next()// 2
// l.next()// 3
// l.next()// 4
// l.next()// 没有就没有了
// // 应用场景：抽奖一个一个的抽！
// // 应用场景：自定义遍历器

// function * gen () {
//   let val
//   val = yield 1//yield没有返回值
//   console.log(val)
// }
// const l = gen()
// //next()——找到yield或者结尾就结束。
// l.next()// 此处没有输出结果——原因：遇见yield后面 只有一个1，没有输出东西就结束了
// l.next()// undefined//从1后开始执行，始终没有遇见yield。只能输出undefined

// function * gen () {
//   let val
//   val = yield [1, 2, 3]
//   console.log(val)
// }
// const l = gen()
// l.next()
// l.next()// 结果同上

// function * gen () { // 1*
//   let val
//   val = yield * [1, 2, 3]// 2yield 3generator函数可以嵌套，需要加*
//   console.log(val)
// }
// const l = gen()
// console.log(l.next())// {value: 1, done: false}//当前遍历的值，当前循环是否结束
// console.log(l.next())// 4next恢复执行，且返回value与done
// // 加*说明后面是可迭代的遍历对象（genarator函数）
// // 加*可嵌套的明后面是generator对象

// generator可以控制遍历，且next可以传参！
// function * gen () {
//   let val
//   val = (yield [1, 2, 3]) + 7
//   console.log(val)
// }
// const l = gen()
// l.next(10)// next找yield，把值传给他后面的数
// l.next(20)// 最终结果变成27——通过改变yield的数据给函内部传参
// l.return()// 类似break，可以提前终止
// l.return(100)// 传参数可以影响最终返回值

// function * gen () {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }

// const g = gen()
// console.log(g.next())// 内部虽然是无限循环，但是外部控制循环次数。不会死掉
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('ss'))
// console.log(g.next())

// 年会抽奖——一等奖1人。2等奖2人。3等奖3人呢
// es5
// function draw (first = 1, second = 2, third = 3) {
//   let firstPrize = ['1A', '1B', '1C']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G']
//   let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G']
//   let result = []
//   let random
//   // 抽一等奖
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrize.length)// 0~4
//     result = result.concat(firstPrize.splice(random, 1))// result里装入获奖结果（每次移除已经获奖的那个避免重复抽到）
//   }
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrize.length)// 0~7
//     result = result.concat(secondPrize.splice(random, 1))// result里装入获奖结果（每次移除已经获奖的那个避免重复抽到）
//   }
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * thirdPrize.length)// 0~7
//     result = result.concat(thirdPrize.splice(random, 1))// result里装入获奖结果（每次移除已经获奖的那个避免重复抽到）
//   }
// }
// const t = draw()
// for (let value of t) {
//   console.log(value)// 全部出来了
// }

// es6
// function * draw (first = 1, second = 2, third = 3) {
//   let firstPrize = ['1A', '1B', '1C']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G']
//   let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G']
//   let random
//   let count = 0

//   while (1) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrize.length)
//       yield firstPrize[random]// 抽一等奖
//       count++// 继续抽
//       firstPrize.splice(random, 1)// 把一等奖数据移除
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrize.length)
//       yield secondPrize[random]// 抽二等奖
//       count++// 继续抽
//       secondPrize.splice(random, 1)// 把抽到的二等奖数据移除
//     } else if (count < first + second + third) {
//       random = Math.floor(Math.random() * thirdPrize.length)
//       yield thirdPrize[random]// 抽三等奖
//       count++// 继续抽
//       thirdPrize.splice(random, 1)// 把抽到的三等奖数据移除
//     } else {
//       return false
//     }
//   }
// }

// const d = draw()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)

// 数到3的倍数要喝酒！
function * count (x = 1) {
  while (1) {
    if (x % 3 === 0) {
      yield x
    }
    x++
  }
}

const num = count()
console.log(num.next().value)// 3
console.log(num.next().value)// 6
console.log(num.next().value)// 9
