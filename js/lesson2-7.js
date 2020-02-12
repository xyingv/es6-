/** 字符串拼接***/
// es5
// const a = 20
// const b = 10
// const c = 'javascript'

// const str = 'my age is ' + (a + b) + ' i love ' + c
// console.log(str)

// es6
// const a = 20
// const b = 10
// const c = 'javascript'

// const str = `my age is ${a + b} i love ${c}`
// console.log(str)

// 商品零售价与批发价
// es5
// const retailPrice = 20
// const wholeSalePrice = 16
// const type = 'retail'
// let showTxt = ''
// if (type === 'retail') {
//   showTxt = '您此次购买单价是：' + retailPrice
// } else {
//   showTxt = '您此次购买的批发价是：' + wholeSalePrice
// }
// console.log(showTxt)

// es6
function Price (strings, type) {
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrice = 16
  let showTxt
  if (type === 'retail') {
    showTxt = retailPrice
  } else {
    showTxt = wholeSalePrice
  }
  return `${s1}${showTxt}`
}
let showTxt = Price`您此次购买的价格是：${'retail'}`
console.log(showTxt)// 您此次购买的价格是：20

// 换行
let s1 = `我是第一行
我是第二行`
console.log(s1)
