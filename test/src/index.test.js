/*
 * File: index.test.js
 * Project: wh-dialog
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

describe('测试组一', () => {
    const oJD = new jDialog()
    test('jDialog实例有toast属性', () => {
        expect(oJD).toHaveProperty('toast')
        
        
    })

    test('调用toast方法，页面中有弹窗', () => {
        expect(document.querySelector('.class .jdialog-toast__content')).toBeNull();
        oJD.toast();
        expect(document.querySelector('.class .jdialog-toast__content').innerHTML).toBe('toast');
        
    })
})

describe('测试组二', () => {
    test('测试', () => {
        expect([1, 2, 3]).toEqual([1, 2, 3])
    })

    test('1等于1', () => {
        expect(1 * '1').toBeNaN
    })
})
