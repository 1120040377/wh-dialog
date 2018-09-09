/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

import { $ } from '@/util'
import tpl from './actionSheet.html'

let _sington

/**
 * actionsheet 弹出式菜单
 * @param {array} menus 上层的选项
 * @param {array} actions 下层的选项
 * @param {object=} options 配置项
 *
 * @example
 * // API
 * jdialog.dialog(menus, actions [, options])
 *
 * jdialog.actionSheet([
 *   {
 *     label: '呼叫',
 *     onClick: () => {
 *       console.log('呼叫');
 *     }
 *   }
 * ], [
 *   {
 *     label: '取消',
 *     onClick: () => {
 *       console.log('取消');
 *     }
 *   }
 * ], {
 *   title: '10086',
 *   className: 'my-class',
 *   onClose: () => {
 *     console.log('关闭');
 *   }
 * });
 */
function actionSheet (menus = [], actions = [], options = {}) {
  if (_sington) return _sington

  options = Object.assign({
    menus: menus,
    actions: actions,
    className: '',
    title: '',
    titleColor: '',
    onClose: $.noop
  }, options)

  const oBody = $('body')
  const oDom = $.render(tpl, options)
  const oActionSheet = $(oDom[0].querySelector('.jdialog-actionsheet'))
  const oMask = $(oDom[0].querySelector('.jdialog__mask'))

  function _hide (callback) {
    // 防止二次调用导致报错
    _hide = $.noop  // eslint-disable-line

    oActionSheet.addClass('slide-down')
    oMask
      .replaceClass('fadeIn', 'fadeOut')
      .on('animationend webkitAnimationEnd', () => {
        _sington = false
        oDom.remove()
        options.onClose()
        callback && callback()
      })
  }
  function hide (callback) { _hide(callback) }

  oBody.append(oDom)
  oActionSheet.addClass('slide-up')
  oMask
    .addClass('fadeIn')
    .on('click', function () { hide() })

  // 菜单栏绑定事件
  $('.jdialog-actionsheet__menu .jdialog-actionsheet__cell').each((item, index) => {
    item.on('click', evt => {
      if (options.menus[index].onClick) {
        if (options.menus[index].onClick.call(this, evt) !== false) hide()
      } else {
        hide()
      }
    })
  })

  // 动作栏绑定事件
  $('.jdialog-actionsheet__action .jdialog-actionsheet__cell').each((item, index) => {
    item.on('click', evt => {
      if (options.actions[index].onClick) {
        if (options.actions[index].onClick.call(this, evt) !== false) hide()
      } else {
        hide()
      }
    })
  })

  _sington = oDom
  _sington.hide = hide
  return _sington
}
export default actionSheet
