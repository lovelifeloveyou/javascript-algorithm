const PriorityQueue = require('./priorityQueue')

describe('PriorityQueue', () => {
  let priorityQueue

  beforeEach(() => {
    priorityQueue = new PriorityQueue()
  })

  test('enqueue() should add elements in priority order', () => {
    priorityQueue.enqueue('A', 10)
    priorityQueue.enqueue('B', 15)
    priorityQueue.enqueue('C', 11)
    priorityQueue.enqueue('D', 20)
    priorityQueue.enqueue('E', 18)

    expect(priorityQueue.items.length).toBe(5)
    expect(priorityQueue.items[0].element).toBe('A')
    expect(priorityQueue.items[0].priority).toBe(10)
    expect(priorityQueue.items[1].element).toBe('C')
    expect(priorityQueue.items[1].priority).toBe(11)
    expect(priorityQueue.items[2].element).toBe('B')
    expect(priorityQueue.items[2].priority).toBe(15)
    expect(priorityQueue.items[3].element).toBe('E')
    expect(priorityQueue.items[3].priority).toBe(18)
    expect(priorityQueue.items[4].element).toBe('D')
    expect(priorityQueue.items[4].priority).toBe(20)
  })

  test('dequeue() should remove and return the highest priority element', () => {
    priorityQueue.enqueue('A', 10)
    priorityQueue.enqueue('B', 15)
    priorityQueue.enqueue('C', 11)

    const dequeuedElement = priorityQueue.dequeue()

    expect(priorityQueue.items.length).toBe(2)
    expect(dequeuedElement.element).toBe('A')
    expect(dequeuedElement.priority).toBe(10)
    expect(priorityQueue.items[0].element).toBe('C')
    expect(priorityQueue.items[0].priority).toBe(11)
    expect(priorityQueue.items[1].element).toBe('B')
    expect(priorityQueue.items[1].priority).toBe(15)
  })

  test('front() should return the highest priority element without removing it', () => {
    priorityQueue.enqueue('A', 10)
    priorityQueue.enqueue('B', 15)
    priorityQueue.enqueue('C', 11)

    const frontElement = priorityQueue.front()

    expect(priorityQueue.items.length).toBe(3)
    expect(frontElement.element).toBe('A')
    expect(frontElement.priority).toBe(10)
    expect(priorityQueue.items[0].element).toBe('A')
    expect(priorityQueue.items[0].priority).toBe(10)
  })

  test('isEmpty() should return true if the queue is empty, false otherwise', () => {
    expect(priorityQueue.isEmpty()).toBe(true)

    priorityQueue.enqueue('A', 10)

    expect(priorityQueue.isEmpty()).toBe(false)
  })

  test('size() should return the number of elements in the queue', () => {
    expect(priorityQueue.size()).toBe(0)

    priorityQueue.enqueue('A', 10)
    priorityQueue.enqueue('B', 15)

    expect(priorityQueue.size()).toBe(2)
  })

  test('toString() should return a string representation of the elements in the queue', () => {
    priorityQueue.enqueue('A', 10)
    priorityQueue.enqueue('B', 15)
    priorityQueue.enqueue('C', 11)

    const queueString = priorityQueue.toString()

    expect(queueString).toBe('A-10 C-11 B-15 ')
  })
})
