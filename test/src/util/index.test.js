import * as util from '@/util/index.js'

describe('$方法', () => {
  const $ = util.$
  test('$方法含有静态方法', () => {
    expect($.render).toBeInstanceOf(Function)
    expect($.each).toBeInstanceOf(Function)
    expect($.getDataType).toBeInstanceOf(Function)
    expect($.isObject).toBeInstanceOf(Function)
    expect($.isArray).toBeInstanceOf(Function)
    expect($.isNumber).toBeInstanceOf(Function)
    expect($.isString).toBeInstanceOf(Function)
    expect($.isFunction).toBeInstanceOf(Function)
  })

  test('$实例含有的方法', () => {
    const oDiv = new $('<div>wh</div>')
    expect(oDiv.append).toBeInstanceOf(Function)
    expect(oDiv.remove).toBeInstanceOf(Function)
    expect(oDiv.each).toBeInstanceOf(Function)
    expect(oDiv.addClass).toBeInstanceOf(Function)
    expect(oDiv.removeClass).toBeInstanceOf(Function)
    expect(oDiv.replaceClass).toBeInstanceOf(Function)
    expect(oDiv.on).toBeInstanceOf(Function)
  })

  test('$实例、class相关功能测试', () => {
    const oDiv = new $('<div>wh</div>')

    expect(oDiv[0].nodeType).not.toBeUndefined() // 判断是一个DOM节点
    expect(oDiv[0].innerHTML).toBe('wh') // 节点内容为wh
    expect(oDiv[0].classList.length).toBe(0) // 没有class
    oDiv.addClass('my-class')
    expect(oDiv[0].classList.length).toBe(1) // 添加class后长度为1
    expect(oDiv[0].classList.value).toBe('my-class') // class值为my-class
    oDiv.addClass('my-class1')
    expect(oDiv[0].classList.length).toBe(2) // 再次添加class后长度为2
    expect(Array.from(oDiv[0].classList).includes('my-class')).toBeTruthy() // classList含有my-class
    oDiv.removeClass('my-class')
    expect(Array.from(oDiv[0].classList).includes('my-class')).toBeFalsy() // 移除myclass后my-class没有了
    oDiv.replaceClass('my-class1', 'my-class')
    expect(Array.from(oDiv[0].classList).includes('my-class')).toBeTruthy() // 替换后又有my-class了
    expect(oDiv[0].classList.length).toBe(1) // 长度仍然是1
    expect(Array.from(oDiv[0].classList).includes('my-class1')).toBeFalsy() // 但是my-class1没有了
  })

  test('$实例、DOM相关功能测试', () => {
    const oDiv = new $('<div></div>')

    expect(oDiv[0].childNodes.length).toBe(0)
    oDiv.append($('<ul><li>111</li><li>222</li></ul>'))
    expect(oDiv[0].childNodes.length).toBe(1)
    expect(oDiv[0].querySelectorAll('li').length).toBe(2)
    expect(oDiv[0].querySelector('li').innerHTML).toBe('111')
  })

  test('$实例、事件相关内容测试', () => {
    const oBtn = new $('<button></button>')
    let isClick = false
    oBtn.on('click', () => {
      isClick = true
    })

    oBtn[0].click()
    expect(isClick).toBeTruthy
  })
})

describe('render', () => {
  const tpl = '<div><%= question %></div>'
  const data = { question: 'Aue you sure?' }
  expect(util.render(tpl, data).indexOf(data.question) > -1).toBeTruthy()
})

describe('getDataType', () => {
  test('获取类型', () => {
    expect(util.getDataType([])).toBe('Array')
    expect(util.getDataType({})).toBe('Object')
    expect(util.getDataType('wh666')).toBe('String')
    expect(util.getDataType(654)).toBe('Number')
    expect(util.getDataType(undefined)).toBe('Undefined')
    expect(util.getDataType(null)).toBe('Null')
    expect(util.getDataType(Symbol())).toBe('Symbol')
  })
})

describe('isObject', () => {
  expect(util.isObject({})).toBeTruthy()
  expect(util.isObject([])).toBeFalsy()
})

describe('isArray', () => {
  expect(util.isArray([])).toBeTruthy()
  expect(util.isArray({})).toBeFalsy()
})

describe('isNumber', () => {
  expect(util.isNumber(666)).toBeTruthy()
  expect(util.isNumber({})).toBeFalsy()
})

describe('isString', () => {
  expect(util.isString('asd')).toBeTruthy()
  expect(util.isString({})).toBeFalsy()
})

describe('isFunction', () => {
  expect(util.isFunction(() => {})).toBeTruthy()
  expect(util.isFunction({})).toBeFalsy()
})
