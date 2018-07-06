import { $, render, isObject, isString } from '@/util'
import tpl from './toast.html'

function toast(content, options = {}) {
    // 判断如果是字符串，那么将值赋给options
    if (isString(content)) {
        options.content = content
    }
    
    // 合并配置
    const opt = Object.assign({
        className: 'j-dialog',
        status: 'success',
        content: '成功'
    }, isObject(content) ? content : options)

    $('body')[0].appendChild($(render(tpl, opt)))
}

export default toast