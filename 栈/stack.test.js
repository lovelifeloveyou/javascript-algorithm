const Stack = require("./stack.js")

describe("Test Stack", () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test("push() 测试", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.items).toEqual([1, 2, 3])
  })

  test("pop() 测试", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3)
    expect(stack.items).toEqual([1, 2])
  })

  test("peek() 测试", () => {
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.items).toEqual([1, 2])
  })

  test("isEmpty() 测试", () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
  })

  test("size() 测试", () => {
    expect(stack.size()).toBe(0)
    stack.push(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
  })
})
