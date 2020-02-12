// const s = 'aaa_aa_a'
// const r1 = /a+/g
// const r2 = /a+/y
// console.log(r1.exec(s))
// console.log(r2.exec(s))

// console.log(r1.exec(s))// aa// g是全局语法。只要存在就可
// console.log(r2.exec(s))// null// y是粘连语法。从剩余的字符串的首字母开始匹配

// u修饰符——处理unicode 凡是大于\uffff，都可识别
// 中文字符只要加上u就可以判断啦
// U+20BB7
let s2 = '\uD842\udfb7'// UTF-16
console.log(/^\uD842/u.test(s2))// false 判断一段字符是否能匹配中文字符+u

console.log(/^.$/.test(s2))// false
console.log(/^.$/u.test(s2))// true // 要使得任意值能匹配中文字符+u

console.log(/\u{20BB7}/u.test(s2))// true 判断码点是否匹配中文字符+u
console.log(/\u{61}/u.test('a'))// true

console.log(/吉{2}/u.test('吉吉'))// true
console.log(/[a-z]/iu.test('\u212A'))// true
