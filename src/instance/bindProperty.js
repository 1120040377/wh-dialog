
export function bindProperty (jDialog) {
  jDialog.prototype._init = function (options = {}) {
    // 配置项主要做差异化配置
    this.$options = Object.assign({

    }, options)

    addFont('//at.alicdn.com/t/font_776389_5t00mr4jqa2.css')
  }
}

// 添加字体、这里主要是用了阿里iconfont
function addFont (src) {
  var link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = src
  document.getElementsByTagName('head')[0].appendChild(link)
}
