function dec2bin (dec) {
  const stack = []

  // 当不确定循环次数时，使用 while 循环
  while (dec > 0) {
    // 除二取余法
    stack.push(dec % 2) // 获取余数，放入栈中
    dec = Math.floor(dec / 2) // 除数除以二，向下取整
  }

  let binaryString = ''
  // 不断地从栈中取出元素（0或1），并拼接到一起
  while (stack.length > 0) {
    binaryString += stack.pop()
  }

  return binaryString
}


// 简化
// function dec2bin(dec) {
//   let bin = ''
//   while (dec > 0) {
//     bin = (dec % 2) + bin
//     dec = Math.floor(dec / 2)
//   }
//   return bin
// }
