import { $ } from '@/util'
import tpl from './dialog.html'

let _sington

/**
 * dialog，弹窗，alert和confirm的父类
 * @param {Object} options 配置项
 *
 * @example
 * // API
 * jdialog.dialog(options)
 *
 * jdialog.dialog({
 *   title: '标题',
 *   content: '内容',
 *   className: 'my-class',
 *   buttons: [{
 *     label: '取消',
 *     type: 'default',
 *     onClick: function () { alert('取消') }
 *   }, {
 *     label: '确定',
 *     type: 'primary',
 *     color: '#f66',
 *     onClick: function () { alert('确定') }
 *   }],
 *   icon: {
 *     name: success, // 预置图标名称
 *     color: 'blue', // 颜色 (blue、#ff0、rgba(100, 100, 100, .3)、...)
 *     size: '10px', // 尺寸 (10px、1em、.1rem、...)
 *   }
 * });
 *
 * // 主动关闭
 * var $dialog = jdialog.dialog({...});
 * $dialog.hide(() => {
 *   console.log('弹窗已关闭');
 * });
 */
function dialog (options = {}) {
  if (_sington) return _sington

  // 合并配置
  options = Object.assign({
    title: null,
    content: '',
    className: '',
    icon: null,
    callback: $.noop,
    buttons: [{
      label: '确定',
      type: 'primary',
      color: '',
      onClick: $.noop
    }]
  }, options)
  const oBody = $('body')
  const oDom = $.render(tpl, options)

  function _hide (callback) {
    // 防止二次调用导致报错
    _hide = $.noop // eslint-disable-line

    oDom
      .replaceClass('fadeIn', 'fadeOut')
      .on('animationend webkitAnimationEnd', () => {
        _sington = false
        oDom.remove()
        options.callback()
        callback && callback()
      })
  }
  function hide (callback) { _hide(callback) }

  // 将新生成的DOM添加到页面中
  oBody.append(oDom)
  oDom.addClass('fadeIn')

  // 按钮绑定事件
  $('.jdialog-dialog__btn').each((item, index) => {
    item.on('click', evt => {
      if (options.buttons[index].onClick) {
        if (options.buttons[index].onClick.call(this, evt) !== false) hide()
      } else {
        hide()
      }
    })
  })

  _sington = oDom
  _sington.hide = hide
  return _sington
}
export default dialog
