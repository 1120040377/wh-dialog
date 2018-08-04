/*
 * File: index.test.js
 * Project: jdialog
 * File Created: Thursday, 5th July 2018 11:30:14 pm
 * Author: joe (1120040377@qq.com)
 * Desc: 测试导入方法
 * -----
 * Last Modified: Thursday, 5th July 2018 11:52:56 pm
 * Modified By: joe (1120040377@qq.com>)
 * -----
 * Copyright 2018 - 2018 皮的不行
 */

import jDialog from '@/index.js'
const oJD = new jDialog()
describe('测试toast', () => {
  test('jDialog实例有toast属性', () => {
    expect(oJD).toHaveProperty('toast')
  })

  test('jDialog的toast属性是个函数', () => {
    expect(oJD.toast).toBeInstanceOf(Function)
  })

  test('直接调用函数时会返回undefined', () => {
    const oJD1 = jDialog()
    expect(oJD1).toBeUndefined()
  })

  test('测试toast功能', done => {
    /**
         * 1、初始时页面中没有toast
         * 2、不传参时toast值默认为成功
         * 3、连续调用时，再上一个toast未结束时，不会生成新的
         * 4、连续调用时页面中同时只会存在一个tosat
         * 5、测试是否到时被销毁
         */
    // 1
    expect(document.querySelector('.jdialog-toast__content')).toBeNull()

    // 2
    oJD.toast()
    expect(document.querySelector('.jdialog-toast__content').innerHTML).toBe('成功')

    // 3
    oJD.toast('Joe\'s toast')
    expect(document.querySelector('.jdialog-toast__content').innerHTML).not.toBe('Joe\'s toast')
    expect(document.querySelector('.jdialog-toast__content').innerHTML).toBe('成功')

    // 4
    oJD.toast()
    oJD.toast()
    oJD.toast()
    expect(document.querySelectorAll('.jdialog-toast__content').length).toBe(1)

    // 5
    // const data = {
    //   content: 'haha',
    //   duration: 1000
    // }
    // const oToast = oJD.toast(data)
    // console.log(1111, document.querySelector('.jdialog-toast__content').innerHTML)
    // expect(document.querySelector('.jdialog-toast__content').innerHTML).toBe('haha')
    // setTimeout(() => {
    //   oToast[0].dispatchEvent(new Event('webkitAnimationEnd'))
    // }, data.duration)

    // setTimeout(() => {
    //   expect(document.querySelector('.jdialog-toast__content')).toBeNull()
    //   done()
    // }, data.duration + 350) // 动画时间为.35s
    done()
  })
})
