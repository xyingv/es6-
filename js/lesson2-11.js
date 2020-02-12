// // 代理——屏蔽原始信息，保证原始信息的安全
// // 如中介买房，o是原始信息，传给代理后，输出的是代理给的价钱等。
// let o = {
//   name: 'xiaoming',
//   price: 290
// }
// let d = new Proxy(o, {// 代理对象，传给proxy，在接下来的操作中已经没有了
//   get (target, key) { // 再次取代理对象，key值
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })
// console.log(d.price, d.name)//290 xiaoming

// 备份数据
// ES6 数据只读不可改
// let o = {
//   name: 'xiaoming',
//   price: 290
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key]
//   },
//   set (target, key, value) {//代理可以改
//     return false
//   }
// })
// d.price = 300// 没有修改,备份数据
// console.log(d.price, d.name)// 290 xiaoming

// es5
// 数据只读不可改
// let o = {
//   name: 'xiaoming',
//   price: 290
// }
// for (let [key] of Object.entries(o)) { // 键值对的形式，可遍历
//   Object.defineProperty(o, key, {// 自己想改都改不了，代理也不可以改
//     writable: false
//   })
// }
// o.price = 300// 没有修改,备份数据
// console.log(o.price, o.name)// 290 xiaoming

// // 校验——用户输入的是我们想要的信息
// let o = {
//   name: 'xiaoming',
//   price: 290
// }
// // 监听错误——将上报机制与报告错误解耦了
// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   // report('./')// 上报逻辑——加不加随你
// })
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') { // 目标key是price时，规则符合如下则修改，不符合则不变输出。
//       if (value > 300) {
//         throw new TypeError('price exceed 300')// 不满足规则就要触发错误（没有上报）
//       } else {
//         target[key] = value
//       }
//     } else {
//       target[key] = value
//     }
//   } else {
//     return false
//   }
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })

// d.price = 320
// d.name = 'hanmeimei'
// d.age = 400
// console.log(d.price, d.name, d.age)// 200 "hanmeimei" ""

// 生成ID后只读不可改
// class Component {// 组件类
//   constructor () {
//     this.proxy = new Proxy({// 提供原始数据还不能修改
//       id: Math.random().toString(36).slice(-8)// 随机ID=随机数.字符串36进制.截取后八位
//     }, {})// proxy里面的set与get没有，透视执行
//   }
//   get id () { // 使用读取的方法读
//     return this.proxy.id
//   }
// }

// let com = new Component()
// let com2 = new Component()
// for (let i = 0; i < 10; i++) { // 生成ID读多次还不变
//   console.log(com.id, com2.id)
// }
// com.id = 'abc'
// console.log(com.id, com2.id)// 生成ID读多次还不变

// 撤销代理——阅后即焚
let o = {
  name: 'xiaoming',
  price: 290
}
let d = Proxy.revocable(o, {// 撤销代理,d包含代理信息和撤销动作
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})
console.log(d.proxy.price, d)// 310 {proxy: Proxy, revoke: ƒ}
setTimeout(function () {
  d.revoke()// 撤销代理权力
  setTimeout(function () {
    console.log(d.proxy.price)// 撤销后再去读一下数据发现数据撤销咯
  }, 100)
}, 1000)
