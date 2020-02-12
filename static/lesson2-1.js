// function test () {
//  var a = 3
//  function test2() {/ /闭包能使得函数外部拿到函数内部的局部变量（作用域链：一层一层网上找）
// return a
// }
//   return test2
// }
// test()

// var a = 3
// if (a === 3) {
//     let b = 4
// }
// console.log(a)
// console.log(b)

// window.a = 3
// function test () {
//     console.log(this.a)
// }
// test()
// test.bind({ a:100 })()// 让函数动态绑定到一个对象去，this指向对象本身
