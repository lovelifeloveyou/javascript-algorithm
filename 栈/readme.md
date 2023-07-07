### 什么是栈

栈（stack）是一种运算受限的<font color="red">**线性表**</font>：

* <font style="background: #f5f5f5;color: #000000">LIFO（last in first out）后进先出</font>表示就是后进入的元素，第一个弹出栈空间。类似于自动餐托盘，最后放上的托盘，往往先把拿出去使用。
* 其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。
* 向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素。
* 从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

![](https://i.imgur.com/uXT4L3H.png)

栈的特点：**先进后出，后进先出**

### 程序中的栈结构

- 函数调用栈：A(B(C(D())))：
  即 A 函数中调用 B，B 调用 C，C 调用 D；在 A 执行的过程中会将 A 压入栈，随后 B 执行时 B 也被压入栈，函数 C 和 D 执行时也会被压入栈。所以当前栈的顺序为：A->B->C->D（栈顶）；函数 D 执行完之后，会弹出栈被释放，弹出栈的顺序为 D->C->B->A;
- 递归：
  为什么没有停止条件的递归会造成栈溢出？比如函数 A 为递归函数，不断地调用自己（因为函数还没有执行完，不会把函数弹出栈），不停地把相同的函数 A 压入栈，最后造成栈溢出（Stack Overflow）。

### 栈常见的操作

- `push()` 添加一个新元素到栈顶位置。
- `pop()` 移除栈顶的元素，同时返回被移除的元素。
- `peek()` 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()` 如果栈里没有任何元素就返回 `true`，否则返回 `false`。
- `size()` 返回栈里的元素个数。这个方法和数组的 `length` 属性类似。
- `toString()` 将栈结构的内容以字符串的形式返回。

### JavaScript 代码实现栈结构

```Javascript
// 栈结构的封装
class Stack {
  constructor () {
    this.items = []
  }

  // push(item) 压栈操作，往栈里面添加元素
  push (item) {
    this.items.push(item)
  }

  // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop () {
    return this.items.pop()
  }

  // peek() 查看栈顶元素
  peek () {
    return this.items[this.items.length - 1]
  }

  // isEmpty() 判断栈是否为空
  isEmpty () {
    return this.items.length === 0
  }

  // size() 获取栈中元素个数
  size () {
    return this.items.length
  }

  // toString() 返回以字符串形式的栈内元素数据
  toString () {
    let result = ''
    for (let i of this.items) {
      result += i + ' '
    }
    return result
  }
}
```

### Jest 单元测试

```
const Stack = require('./index.js')

describe('Test Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('push() 测试', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.items).toEqual([1, 2, 3])
  })

  test('pop() 测试', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3)
    expect(stack.items).toEqual([1, 2])
  })

  test('peek() 测试', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.items).toEqual([1, 2])
  })

  test('isEmpty() 测试', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)  
  })

  test('size() 测试', () => {
    expect(stack.size()).toBe(0)
    stack.push(1)
    stack.push(2)
    expect(stack.size()).toBe(2)  
  })
})
```

### 栈的应用场景

- 需要<font color="red">后进先出</font>的场景
- 比如：十进制转二进制、判断字符串的括号是否有效、函数调用堆栈......

<font color="red">场景一：十进制转二进制</font>

- 后出来的余数反而要排到前面
- 把余数依次入栈，然后再出栈，就可以实现余数倒序输出

<font color="red">场景二：有效的括号</font>

- 越靠后的左括号，对应的右括号越靠前
- 左括号入栈，右括号出栈，最后栈空了就是合法的

<font color="red">场景三：函数调用堆栈</font>

- 最后调用的函数，最先执行完
- JS 解释器使用栈来控制函数的调用顺序