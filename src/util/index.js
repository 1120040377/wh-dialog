export function $(selector) {
    let oNode;
    if (/<[^>]+>/g.test(selector)) {
    // 如果是HTML
        let oDiv = document.createElement('div')
        oDiv.innerHTML = selector
        oNode = oDiv.firstChild;
    } else {
        oNode = document.querySelectorAll(selector);
    }
    return oNode;
}

// 简易模板引擎，生成HTML
export function render(tpl, data) {
    var code = `\`${tpl.replace(/[\r\t\n]/g, ' ').replace(/{(.*?)}/g, '${data.$1}')}\``;
    return eval(code);
}

// 获取数据类型
export function getDataType (data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

// 判断是否为对象
export function isObject(data) {
    return getDataType(data) === 'Object'
}

// 判断是否为数组
export function isArray(data) {
    return getDataType(data) === 'Array'
}

// 判断是否为数组
export function isNumber(data) {
    return getDataType(data) === 'Number'
}

// 判断是否为数组
export function isFunction(data) {
    return getDataType(data) === 'Function'
}