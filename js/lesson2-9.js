// 问题：想要安装代码调用顺序先输出test、在输出1
// function loadScript (src) { // 异步加载js
//   let script = document.createElement('script')
//   script.src = src
//   document.head.append(srcipt)
// }
// function test () {
//   console.log('test')
// }
// loadScript('./1.js')
// test()//结果:test 1
// js是单线程的:这样按照顺序加载9、10行代码，后异步加载loadScript()的内容，还没加载完就执行test()了,所以写会先执行loadScript()再执行test()

// 回调一个函数
// function loadScript (src, callback) { // 回调函数——处理单个回调没问题。多个会很麻烦
//   let srcipt = document.createElement('script')
//   script.src = src
//   script.onload = () => { callback() }
//   document.head.append(script)
// }
// function test () {
//   console.log('test')
// }
// loadScript('./1.js', test)// 1 test

// 回调多个函数
// function loadScript (src, callback) { // 回调函数——回调地狱
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () => { callback(src) }
//   script.onerr = () => { callback(err) }
//   document.head.append(script)
// }
// loadScript('./1.js', function (script) {
//   if (script.message) { // 有erro信息

//   } else { // 没有则继续执行
//     loadScript('./2.js', function (script) {
//       loadScript('./3.js', function (script) {

//       })
//     })
//   }
// })// 1 2 3

// es6回调多个函数——Promise
// function loadScript (src) {
//   // 状态：pending 结果：undefined
//   return new Promise((resolve, reject) => { // 修改状态的两个方法
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src)// 状态：fulfilled 结果：result
//     script.onerror = (err) => reject(err)// 状态：rejected 结果：error
//     document.head.append(script)
//   })// 函数作为参数
// }

// loadScript('./1.js')
//   .then(loadScript('./2.js'))//里面传的不是函数而是值
//   .then(loadScript('./3.js'))

// es6——then怎么用的？工作原理？  错误处理怎么执行？
// .then是promise原型上的方法，所以只要有promise就能调用.then
// Promise.then(onFulfilled, onRejected);内传函数类型，前必选后可选，如果这两个函数没有写或非函数，就会忽略掉这两部分的内容。但是因为传值过程要计算表达式的值，所以也会执行总函数。所以正确写法应该是传两个函数进去

// .then返回的是promise对象（即实例）。当没有写或者非函数时，返回的是空promise对象，也是可以正常工作哒。
// 修改：
// function loadScript (src) {
//   // 状态：pending 结果：undefined
//   return new Promise((resolve, reject) => { // 修改状态的两个方法
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src)// 状态：fulfilled 结果：result
//     script.onerror = (err) => reject(err)// 状态：rejected 结果：error
//     document.head.append(script)
//   })// 函数作为参数
// }
// // 假设只有1.js 2.js 3.js
// loadScript('./4.js')// 返回的是promise对象，但是4不存在所以执行执行err（跳过了2），接着执行3
//   .then(() => {
//     loadScript('./2.js')
//   }, (err) => {
//     console.log(err)
//   })
//   .then(() => {
//     loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   })// err err 3

// loadScript('./1.js')
//   .then(() => {
//     loadScript('./4.js')// 不是函数，传值过程要计算表达式的值，所以也会执行总函数。。
//   }, (err) => {
//     console.log(err)
//   })
//   .then(() => {
//     loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   })// 1 err 3

// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./4.js')// 此处调用的应是函数值，返回promise对象//即想要此处结果影响下一步，加return
//   }, (err) => {
//     console.log(err)
//   })
//   .then(() => {
//     loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   })// 1 err err

// 当存在静态方法时(部分操作不需要异步操作时)，想要执行异步算法，如下
// function test (bool) {
//   if (bool) {
//     return new Promise((resolve, reject) => {
//       resolve(30)
//     })// 有异步操作的数据操作
//   } else {
//     return Promise.resolve(new Error('ss'))// 没有异步操作的数据操作
//   }
// }
// test(0)
//   .then((value) => {
//     console.log(value)
//   }, (err) => {
//     console.log(err)
//   })// ss

// function loadScript (src) {
//   // 状态：pending 结果：undefined
//   return new Promise((resolve, reject) => { // 修改状态的两个方法
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src)// 状态：fulfilled 结果：result
//     script.onerror = (err) => reject(err)// 状态：rejected 结果：error
//     document.head.append(script)
//   })// 函数作为参数
// }
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./4.js')
//   })
//   .then(() => {
//     return loadScript('./3.js')
//   })
//   .catch(err => { // 优雅很多！！！catch是promise上的方法
//     console.log(err)
//   })// 1 err err
//   // 不可以throw new Error捕获。错误。错错错

// 并行接口p1、p2、p3，某个数据需要这3个接口一起提供数据，这时需要把数据聚合
// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)

// Promise.all([p1, p2, p3]).then((value) => {
//   console.log(value)
// })

// 竞争(先到先得)——很多接口提供一个图片（主备）,只要某个线路加载成功就ok
// const p1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(1)
//     }, 1000)// 模拟相应速度慢
//   })
// }

// const p2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(2)
//     }, 0)// 模拟相应速度快
//   })
// }

// Promise.race([p1(), p2()]).then((value) => {
//   console.log(value)// 2——因为2个api竞争，第二个响应速度快，就输出他了。先到先得
// })
