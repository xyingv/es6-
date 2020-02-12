// // es5
// console.log(Math.floor.apply(null, [1.72]))// 指定方法Math.floor //通过apply运用到某个作用域上
// // es6
// console.log(Reflect.apply(Math.floor, null, [3.72]))

// 有什么用？
// es5
// let price=91.5
// if(price>100){
//     price=Math.floor.apply(null,[price])
// }else{
//     price.Math.ceil.apply(null,[price])
// }
// console.log(price)
// es6
// let price = 91.5
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))

// 用反射更加简洁的实现类的实例化
// es5
// let d = new Date()
// console.log(d.getTime())
// es6
// let d = Reflect.construct(Date, [])// (类，参数) //调用不同的类去动态实现实例化
// console.log(d.getTime())

// const student = {}
// const r = Reflect.defineProperty(student, 'name', { value: 'Mike2' })// 增
// console.log(student, r)// {name: Mike} true
// const r = Object.defineProperty(student, 'name', { value: 'Mike2' })
// console.log(student, r)//{name: Mik {name: Mike}}
// 两者都是给对象新增，不同的是r返回值不同。

// const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x')// 删：效果与Object一样，但是返回值不同
// console.log(obj)

// console.log(Reflect.get(obj, 'x'))// 读
// console.log(Reflect.get([3, 4], 1))// 4 读数组[3,4]的位置1的数据

// const obj = { x: 1, y: 2 }
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))// {value: 1, writable: true, enumerable: true, configurable: true}
// console.log(Reflect.has(obj, 'x'))// 是否有属性——object上没有这个！

// Object.freeze(obj)// 不可扩展的设置
// Reflect.preventExtensions(obj)// 禁止拓展
// obj.z = 3
// console.log(Reflect.isExtensible(obj))// false 是否可扩展
// console.log(obj)// {x: 1, y: 2}，没有扩展添加3

// console.log(Reflect.ownKeys(obj))// [x,y]// 找出某个对象下的自由属性 有时有原型链上的属性不是自身属性
// console.log(Reflect.ownKeys([1, 2]))// 数组返回：["0","1","length"]
// Reflect.set(obj, 'z', 4)// 写
// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))// 原型对象上有哪些方法

const arr = ['duck', 'duck', 'duck']
// Reflect.set(arr, 2, 'goose')
// console.log(arr)// ["duck", "duck", "goose"]
console.log(Reflect.getPrototypeOf(arr))// 原型对象上有哪些方法
Reflect.setPrototypeOf(arr, String.prototype)// 修改原型对象，不能使用原来的方法咯。将数组改成了字符串
