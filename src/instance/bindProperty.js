
export function bindProperty (jDialog) {
    jDialog.prototype._init = function (options = {}) {
        // 配置项主要做差异化配置
        this.$options = Object.assign({

        }, options)
        console.log('初始化，绑定属性')
    }
}