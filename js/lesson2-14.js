// 导入默认值与变量
// import name, { addr, list } from './lesson2-14-mod'// 导入
// import name2, { addr as addr2 } from './lesson2-14-mod'// 每个文件只有一个默认导出，可随意改名
// console.log(name2, addr2)

// 导入函数
// import { say } from './lesson2-14-mod'
// say('hi')

// 导入多个对象
// import obj from './lesson2-14-mod'
// let { data1, data2 } = obj
// console.log(data1, data2)

// 导入类
// import { Test } from './lesson2-14-mod'
// let test = new Test()
// console.log(test.id)

// 导入多个类
// import * as Mod from './lesson2-14-mod'
// let test1 = new Mod.Test()
// console.log(test1.id)
// let test2 = new Mod.Test()
// console.log(test2.id)
// let people = new Mod.default()
// console.log(people.id)

// 函数内调用函数
import { run } from './lesson2-14-mod'
run()
