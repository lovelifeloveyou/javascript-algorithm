/**
 * https://leetcode.cn/problems/number-of-recent-calls/
 * 解题思路：
 *    1、越早发出的请求越早不再最近3000ms内的请求里
 *    2、满足先进先出，考虑用队列
 * 解题步骤：
 *    1、有新请求就入队，3000ms前发出的请求出队
 *    2、队列的长度就是最近请求次数
 */

var RecentCounter = function () {
  this.q = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.q.push(t)

  while (this.q[0] < t - 3000) {
    this.q.shift()
  }

  return this.q.length
}

/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
