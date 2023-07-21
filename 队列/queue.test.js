const Queue = require('./queue')

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
