export function $ (selector) {
  if (this instanceof $) {
    let oNode
    if (/<[^>]+>/g.test(selector)) {
      // 如果是HTML
      let oDiv = document.createElement('div')
      oDiv.innerHTML = selector
      oNode = oDiv.firstChild
    } else if (selector && selector.nodeType === 1) {
      oNode = selector
    } else {
      oNode = document.querySelectorAll(selector)
    }

    // 如果节点有nodeType，说明是一个HTML节点，没有的话则是一个nodeList
    if (oNode.nodeType) {
      this[0] = oNode
      this.length = 1
    } else {
      $.each(oNode, (node, index) => {
        this[index] = node
      })
      this.length = oNode.length
    }
    return this
  } else {
    return new $(selector)
  }
}

$.prototype = {
  // 给当前对象添加子元素
  append (oDom) {
    oDom.each((item) => {
      this[0].appendChild(item[0])
    })
    return this
  },
  // 移除当前节点的某个子节点
  remove () {
    this.each((item) => {
      item[0].parentNode.removeChild(item[0])
    })
    return this
  },
  // 遍历数组和伪数组
  each (fn) {
    Array.from(this).forEach((item, index) => {
      fn($(item), index)
    })
    return this
  },
  // 添加样式
  addClass (className) {
    this.each((item) => {
      item[0].classList.add(className)
    })
    return this
  },
  // 移除样式
  removeClass (className) {
    this.each((item) => {
      item[0].classList.remove(className)
    })
    return this
  },
  // 替换样式
  replaceClass (a, b) {
    this.each((item) => {
      item[0].classList.remove(a)
      item[0].classList.add(b)
    })
    return this
  },
  // 监听事件
  on (eventName, cb) {
    const events = eventName.split(' ')
    this.each((item) => {
      events.forEach(event => item[0].addEventListener(event, cb))
    })
  }
}

// 静态方法，生成自定义nodeList
$.render = function (tpl, data) {
  return $(render(tpl, data))
}

// 遍历方法
$.each = function (list, fn) {
  Array.from(list).forEach((item, index) => {
    fn(item, index)
  })
}

// 添加静态方法
$.getDataType = getDataType
$.isObject = isObject
$.isArray = isArray
$.isNumber = isNumber
$.isString = isString
$.isFunction = isFunction
$.noop = function () {}

// 简易模板引擎，生成HTML
export function render (tpl, data) {
  const code = 'var p=[];with(this){p.push(\'' +
  tpl
    .replace(/[\r\t\n]/g, ' ')
    .split('<%').join('\t')
    .replace(/((^|%>)[^\t]*)'/g, '$1\r')
    .replace(/\t=(.*?)%>/g, '\',$1,\'')
    .split('\t').join('\');')
    .split('%>').join('p.push(\'')
    .split('\r').join('\\\'') + '\');}return p.join(\'\');'
  return new Function(code).apply(data) // eslint-disable-line
}

// 获取数据类型
export function getDataType (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// 判断是否为对象
export function isObject (data) {
  return getDataType(data) === 'Object'
}

// 判断是否为数组
export function isArray (data) {
  return getDataType(data) === 'Array'
}

// 判断是否为数字
export function isNumber (data) {
  return getDataType(data) === 'Number'
}

// 判断是否为字符串
export function isString (data) {
  return getDataType(data) === 'String'
}

// 判断是否为函数
export function isFunction (data) {
  return getDataType(data) === 'Function'
}
