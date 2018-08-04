import { $ } from '@/util'
import dialog from '../dialog/'

/**
 * 确认弹窗
 * @param {String} content 弹窗内容
 * @param {Function} yes 点击确定按钮的回调
 * @param {Object} yes 配置项
 * @param {Function} no  点击取消按钮的回调
 * @param {Object} no 配置项
 * @param {Object} options 配置项
 *
 * @example
 * // API
 * jdialog.confirm(content [, yes] [, no] [,options])
 *
 * jdialog.confirm('普通的confirm');
 *
 * jdialog.confirm('自定义标题的confirm', { title: '自定义标题' });
 *
 * jdialog.confirm('带回调的confirm', () => { console.log('yes') }, () => { console.log('no') });
 *
 * var $confirm = jdialog.confirm('手动关闭的confirm', () => {
 *     return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
 * });
 * $confirm.hiden()
 *
 * // 全部配置
 * jdialog.confirm('内容', {
 *   title: '标题',
 *   icon: {
 *     name: success, // 预置图标名称
 *     color: 'blue', // 颜色 (blue、#ff0、rgba(100, 100, 100, .3)、...)
 *     size: '10px', // 尺寸 (10px、1em、.1rem、...)
 *   }
 *   buttons: [{
 *     label: '再想一想',
 *     type: 'default',
 *     onClick: () => { console.log('no') }
 *   }, {
 *     label: '好的',
 *     type: 'primary',
 *     onClick: () => { console.log('yes') }
 *   }]
 * });
 */
function confirm (content = '', yes = $.noop, no = $.noop, options) {
  if ($.isObject(yes)) {
    options = yes
    yes = $.noop
  } else if ($.isObject(yes)) {
    options = no
    no = $.noop
  }

  options = Object.assign({
    content: content,
    buttons: [{
      label: '取消',
      type: 'default',
      onClick: no
    }, {
      label: '确定',
      type: 'primary',
      onClick: yes
    }]
  }, options)

  return dialog(options)
}
export default confirm
