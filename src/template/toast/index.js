import { $, isObject, isString } from '@/util'
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
        content: '成功',
        duration: 1600,
    }, isObject(content) ? content : options)

    const 
        oBody = $('body'),
        oDom = $.render(tpl, opt);

    // 初始时移除上一次的弹窗
    oBody.remove($('.jdialog'))

    // 将新生成的DOM添加到页面中
    oBody.append(oDom);
    oDom.addClass('fadeIn');

    setTimeout(() => {
        oDom.replaceClass('fadeIn', 'fadeOut')
        oDom.on('animationend webkitAnimationEnd', () => {
            oBody.remove(oDom)
        })
        // oBody.remove(oDom)
    }, opt.duration)
}

export default toast