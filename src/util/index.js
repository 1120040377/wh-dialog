function $ (selector) {
    return document.querySelectorAll(selector);
}

// 封装DOM操作相关方法
Object.assign($.prototype, {
    // 简易模板引擎，生成HTML
    render(tpl, data) {
        var code = `\`${tpl.replace(/[\r\t\n]/g, ' ').replace(/{(.*?)}/g, '${data.$1}')}\``;
        return eval(code);
    },
})


// 封装其它工具方法
Object.assign($.prototype, {

})


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

export function $;