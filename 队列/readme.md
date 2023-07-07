### 认识队列

队列（Queue）是一种运算受限的**线性表**，特点：**先进先出**。（FIFO：First In First Out）

**受限之处：**

- 只允许在表的前端（front）进行删除操作
- 只允许在表的后端（rear）进行插入操作

生活中类似队列结构的场景：

- 排队，比如在电影院，商场，甚至是厕所排队。
- 优先排队的人，优先处理。 (买票、结账、WC)。

### 队列图解

![](https://i.imgur.com/EubE46L.png)

### 队列的应用场景

- 打印队列：计算机打印多个文件的时候，需要排队打印。
- 线程队列：当开启多线程时，当新开启的线程所需的资源不足时就先放入线程队列，等待 CPU 处理。
- JS 异步中的任务队列：JS 是单线程，无法同时处理异步中的并发任务；使用任务队列先后处理异步任务。
- 计算最近请求次数：有新请求就入队，3000ms前发出的请求出队；队列的长度就是最近请求次数。

### 队列的实现

- 基于数组实现
- 基于链表实现

### 队列常见的操作

- `enqueue(element)` 向队列尾部添加一个（或多个）新的项。
- `dequeue()` 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- `front()` 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与 Map 类的 peek 方法非常类似）。
- `isEmpty()` 如果队列中不包含任何元素，返回 true，否则返回 false。
- `size()` 返回队列包含的元素个数，与数组的 length 属性类似。
- `toString()` 将队列中的内容，转成字符串形式。

### JavaScript 实现队列

```javascript
class Queue {
  constructor() {
    this.items = []
  }

  // enqueue(item) 入队，将元素加入到队列中
  enqueue(item) {
    this.items.push(item)
  }

  // dequeue() 出队，从队列中删除队头元素，返回删除的那个元素
  dequeue() {
    return this.items.shift()
  }

  // front() 查看队列的队头元素
  front() {
    return this.items[0]
  }

  // isEmpty() 查看队列是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // size() 查看队列中元素的个数
  size() {
    return this.items.length
  }

  // toString() 将队列中的元素以字符串形式返回
  toString() {
    let result = ''
    for (let item of this.items) {
      result += item + ' '
    }
    return result
  }
}

module.exports = Queue
```

### Jest 单元测试

```javascript
const Queue = require('./Queue')

describe('Queue', () => {
  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  test('enqueue() should add items to the queue', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')

    expect(queue.items).toEqual(['a', 'b', 'c'])
  })

  test('dequeue() should remove items from the queue', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    queue.enqueue('d')

    queue.dequeue()
    queue.dequeue()

    expect(queue.items).toEqual(['c', 'd'])
  })

  test('front() should return the first item in the queue', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')

    expect(queue.front()).toBe('a')
  })

  test('isEmpty() should return true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true)

    queue.enqueue('a')

    expect(queue.isEmpty()).toBe(false)
  })

  test('size() should return the number of items in the queue', () => {
    expect(queue.size()).toBe(0)

    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')

    expect(queue.size()).toBe(3)
  })

  test('toString() should return a string representation of the queue', () => {
    queue.enqueue('c')
    queue.enqueue('d')

    expect(queue.toString()).toBe('c d ')
  })
})
```

### JS 异步中的任务队列

![](https://i.imgur.com/ZdaaYn0.png)