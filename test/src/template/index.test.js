import { addMethods } from '@/template'
import jDialog from '@/index.js'

describe('测试添加方法函数', () => {
  test('测试原型上已有toast属性时', () => {
    jDialog.prototype.toast = true
    expect(addMethods.bind(this, jDialog)).toThrowError()
  })
})
