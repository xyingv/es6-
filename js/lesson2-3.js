// es5
// let Animal = function (type) {
//   this.type = type//属性写在构造函数内
// }

// Animal.prototype.eat=function(){//方法写在原型链上
//     console.log('I like eating')
// }
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)

// dog.eat()
// monkey.constructor.prototype.eat=function(){//修改方法
//     console.log('error')
// }
// dog.eat()

// //es6
// class Animal {
//     constructor (type) {
//         this.type = type//构造函数内写属性
//     }
//     eat () {//构造函数外写方法
//         console.log('i am eat food')
//     }
// }

// let dog = new Animal('dog')
// let monkey = new Animal('monkey')

// console.log(dog)
// console.log(monkey)

// dog.eat()

// es6读取属性
// class Animal {
//     constructor (type) {
//         this.type = type
//     }
//     get age () {//get+方法=不能修改的属性 set+方法=可修改的属性
//         return 4
//     }
//     set age (val) {
//         this.realAge = val
//     }
// }
// let dog = new Animal('dog')
// console.log(dog.age)
// dog.age=5
// console.log(dog.realAge)

// let _age = 4
// class Animal { // es6为什么不把_age定义到函数内部？因为es6不支持私有属性，只能用闭包去做
//   constructor (type) {
//     this.type = type
//   }
//   get age () { // age只是出入口，真正存储的是_age
//     return _age//返回值与出口名字不一样
//   }
//   set age (val) { // age()又是方法，可以加限定条件.可以做你想做的逻辑
//     if (val < 7 && val > 4) {
//       _age = val
//     }
//   }
// }
// let dog = new Animal('dog') // 实例是Animal的实例，_age位于Animal外，所以实例拿不到_age的，但是通过闭包的形式，却取到了_age值(私有变量的保护)
// console.log(dog.age) // 4
// dog.age = 5
// console.log(dog.Age) // 5
// dog.age = 8
// console.log(dog.Age) // 4

// 操作方法
// es5
// 动态方法:实例的方法用原型链或者是构造函数内写
// 静态方法:类.名=function(){}
// let Animal = function (type) {
//   this.type = type
// }

// Animal.prototype.eat = function () {
//   Animal.walk()// 类调用,如果是实例对象引用应该是this.walk()
// }

// Animal.walk = function () { // 静态方法:挂在类上
//   console.log('i am walking')
// }
// let dog = new Animal('dog')
// dog.eat()

// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () { // 实例对象的方法--调用实例可以用
//     Animal.walk()
//     console.log('i am eat food')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// 静态方法：只有类可以调用，实例不能调用

/** *********继承******* */
// es5
let Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  Animal.walk()
}

Animal.walk = function () {
  console.log('i am walking')
}
let Dog = function () {
  // 初始化父类的构造函数
  Animal.call(this, 'dog')// Dog继承了Animal的属性
  this.run = function () {
    console.log('i can running')
  }
}

Dog.prototype = Animal.prototype// Dog继承了Animal的方法
let dog = new Dog('dog')
dog.eat()

// es6
class Animal {
  constructor (type) {
    this.type = type
  }
  eat () { // 实例对象的方法--调用实例可以用
    Animal.walk()
    console.log('i am eat food')
  }
  static walk () {
    console.log('i am walking')
  }
}

// class Dog extends Animal {// 如果只是继承没有新东西可以不写

// }
class Dog extends Animal {
  constructor (type) { // 与父类一致（传参）
    super(type)// 继承父类，一定要放在这里
    this.age = 2// 自己新增的功能
  }
}
let dog = new Dog('dog')
dog.eat()
