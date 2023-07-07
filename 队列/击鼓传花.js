/**
 * 分析：传入一组数据集合和设定的数字 number，循环遍历数组内元素，遍历到的元素为指定数字 number 时将该元素删除，直至数组剩下一个元素。
 */

const Queue = require('./queue')

function passGame (nameList, number) {
  // 创建一个队列
  const queue = new Queue()

  // 将所有人放入到队列中
  for (const name of nameList) {
    queue.enqueue(name)
  }

  // 当只有一个人的时候终止游戏
  while (queue.size() > 1) {
    for (let i = 0; i < number - 1; i++) {
      // 把队列的第一个人放入到队尾
      queue.enqueue(queue.dequeue())
    }

    // 直接从队列中删除number对应的这个人
    queue.dequeue()
  }

  return {
    name: queue.front(),  // 最终获胜的人
    num: nameList.indexOf(queue.front()) + 1  // 最终获胜人在原来队伍中的第几个
  }
}

module.exports = passGame