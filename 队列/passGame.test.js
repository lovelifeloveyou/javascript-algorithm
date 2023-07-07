const passGame = require('./击鼓传花')

describe('击鼓传花游戏 Test', () => {
  const stus = [
    '胡一菲',
    '曾小贤',
    '吕子乔',
    '陈美嘉',
    '关谷神奇',
    '唐悠悠',
    '陆展博',
    '林宛瑜',
    '张伟',
    '诸葛大力',
    '咖喱酱',
    '赵海棠',
  ]

  test('获胜的人', () => {
    expect(passGame(stus, 3)).toEqual({
      name: '诸葛大力',
      num: 10,
    })
  })
})
