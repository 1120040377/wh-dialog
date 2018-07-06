import toast from './toast'

export function addMethods(jDialog) {
    const methods = {
        toast
    }

    Object.keys(methods).forEach(attr => {
        if (jDialog.prototype[attr]) {
            throw new Error('发现相同方法：', attr)
        }
        jDialog.prototype[attr] = methods[attr]
    })
}