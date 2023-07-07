/**
 * https://leetcode.cn/problems/valid-parentheses/
 * 解题思路：
 *    1、对于没有闭合的左括号而言，越靠后的左括号，对应的右括号越靠前
 *    2、满足后进先出，考虑用栈
 * 解题步骤：
 *    1、新建一个栈
 *    2、扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法
 *    3、最后栈空了就合法，否则不合法
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false

  const stack = []

  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i]

    if (map.has(c)) {
      const top = stack.pop()
      if (map.get(c) !== top) {
        return false
      }
    } else {
      stack.push(c)
    }
  }

  return stack.length === 0
}

/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
