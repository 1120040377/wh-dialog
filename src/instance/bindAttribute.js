
export function bindAttribute (jDialog) {
    jDialog.prototype.init = function (options = {}) {
        // 配置项主要做差异化配置
        this.$options = Object.assign({

        }, options)
    }
}