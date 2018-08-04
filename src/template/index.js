import toast from './toast'
import dialog from './dialog'
import confirm from './confirm'
import alert from './alert'
import actionSheet from './actionSheet'

export function addMethods (jDialog) {
  const methods = {
    toast,
    dialog,
    confirm,
    alert,
    actionSheet
  }

  Object.keys(methods).forEach(attr => {
    if (jDialog.prototype[attr]) {
      throw new Error('发现相同方法：', attr)
    }
    jDialog.prototype[attr] = methods[attr]
  })
}
