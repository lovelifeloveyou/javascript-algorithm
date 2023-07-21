/**
 * 优先队列：
 *  1、每个元素不再只是一个数据，还包含优先级
 *  2、在添加元素过程中，根据优先级放入到正确位置
 */

const Queue = require('./queue')

// 优先队列内部的元素类
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

// 优先队列类（继承 Queue 类）
class PriorityQueue extends Queue {
  constructor() {
    super()
  }

  // enqueue(element, priority) 入队，将元素按优先级加入到队列中
  // 重写 enqueue()
  enqueue(element, priority) {
    // 根据传入的元素，创建 QueueElement 对象
    const queueElement = new QueueElement(element, priority)

    // 判断队列是否为空
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      // 定义一个变量记录是否成功添加了新元素
      let added = false

      for (let i = 0; i < this.items.length; i++) {
        // 让新插入的元素进行优先级比较， priority 值越小，优先级越大
        if (queueElement.priority < this.items[i].priority) {
          // 在指定的位置插入元素
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  // dequeue() 出队，从队列中删除队头元素，返回删除的那个元素
  // 继承 Queue 类的 dequeue()
  dequeue() {
    return super.dequeue()
  }

  // front() 查看队列的队头元素
  // 继承 Queue 类的 front()
  front() {
    return super.front()
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty()
  isEmpty() {
    return super.isEmpty()
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size() {
    return super.size()
  }

  // toString() 将队列中的元素以字符串形式返回
  // 重写 toString()
  toString() {
    let result = ''
    for (let item of this.items) {
      result += item.element + '-' + item.priority + ' '
    }
    return result
  }
}

module.exports = PriorityQueue
