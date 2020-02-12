// es5
// let arr = ['hello', 'world']
// let firstName = arr[0]
// console.log(firstName)

// es6
// let arr = ['hello', 'world']
// let [firstName, surName] = arr// 解构赋值
// console.log(firstName, surName)

// 左：[]，右：可遍历对象(Array、Object、set、map）
// let arr = ['a', 'b', 'c', 'd']
// let [firstName, , thirdName] = arr
// console(firstName, thirdName)// a c

// let arr = 'abcd'
// let [firstName, , thirdName] = arr
// console(firstName, thirdName)

// let [firstName, thirdName] = new Set([1, 2, 3, 4])
// console.log(firstName, thirdName)

// 对象
// let user = { name: 's', surname: 't' };
// [user.name, user.surname] = [1, 2]
// console.log(user)// {name: 1, surname: 2}

// 循环体
// let arr = ['hello', 'world']
// for(let i=0,item;i<arr.length;++){
//     item=arr[i]
// }

// let user = { name: 's', surname: 't' }
// for (let [k, y] of Object.entries(user)) {
//   // 隐式赋值，显示索引
//   console.log(k, y)// name s  surname t
// }

// // res
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)

// let arr = []
// let [firstName = 'hello', curName, ...last] = arr
// console.log(firstName, curName, last)// undefined undefined []

// object解构赋值
// let options = {
//   title: 'menu',
//   width: 100,
//   height: 200
// }
// let { title, width, height } = options// 必须与key一样
// console.log(title, width, height)//"menu" 100 200

// let { title:title2, width, height } = options// 若自变量名称，如左写
// console.log(title, width, height)

// let { title:title2, width, line=130, height } = options// 定义新值
// console.log(title, width, line, height)

// let{title,...last}=options
// console.log(title,last)
// 复杂结构
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ['Cake', 'Dount'],
//   extra: true
// }

// let { size: { width: width2, height }, items: [, item2], extra } = options
// console.log(width2, height, item2, extra)// 100 200 "Dount" true
