import { $ } from '@/util'
import tpl from './toast.html'

let _sington = false

/**
 * toast 一般用于用户操作成功或失败时的提示
 * @param {String} content 提示信息
 * @param {Object} content 配置项
 * @param {Object} options 配置项
 * @param {Number} options 显示时长
 * @param {Function} options 回调函数
 *
 * @example
 * // API
 * jdialog.toast(content [, options])
 *
 * // 普通的toast
 * jdialog.toast('成功')
 *
 * // 5秒后消失的toast
 * jdialog.toast('成功', 5000)
 *
 * // 带回调toast
 * jdialog.toast('成功', () => {
 *   alert('toast消失)
 * })
 *
 * // 带icon的toast
 * jdialog.toast({
 *   className: 'my-class', // 自定义类名
 *   content: '成功', // 提示信息
 *   duration: 1000, // 显示时长
 *   icon: {
 *     name: 'success', // 预置图标名称
 *     color: 'blue', // 颜色 (blue、#ff0、rgba(100, 100, 100, .3)、...)
 *     size: '10px', // 尺寸 (10px、1em、.1rem、...)
 *   }
 * })
 *
 * // 带icon的toast
 * jdialog.toast({
 *   className: 'my-class', // 自定义类名
 *   content: '成功', // 提示信息
 *   duration: 1000, // 显示时长
 *   icon: 'success', // 如果icon为字符串，则取默认图标，值允许为 success / fail / wait
 * })
 */
function toast (content, options = {}) {
  if (_sington) return _sington

  if ($.isNumber(options)) {
    options = {
      duration: options
    }
  }
  if ($.isFunction(options)) {
    options = {
      callback: options
    }
  }

  // 判断如果是字符串，那么将值赋给options
  if ($.isString(content)) {
    options.content = content
  }
  // 合并配置
  options = Object.assign({
    className: '',
    status: 'success',
    content: '成功',
    callback: $.noop,
    icon: null,
    duration: 1600
  }, $.isObject(content) ? content : options)
  const oBody = $('body')
  const oDom = $.render(tpl, options)

  // 初始时移除上一次的弹窗
  $('.jdialog-toast').remove()

  // 将新生成的DOM添加到页面中
  oBody.append(oDom)
  oDom.addClass('fadeIn')

  setTimeout(() => {
    oDom
      .replaceClass('fadeIn', 'fadeOut')
      .on('animationend webkitAnimationEnd', () => {
        _sington = false
        oDom.remove()
        options.callback()
      })
  }, options.duration)

  _sington = oDom
  return oDom
}

export default toast
