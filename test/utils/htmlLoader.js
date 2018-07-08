/*
 * File: htmlLoader.js
 * Project: jdialog
 * File Created: Thursday, 5th July 2018 11:43:29 pm
 * Author: joe (1120040377@qq.com)
 * Desc: 用于jest中加载html文件
 *   transform: {
 *     "^.+\\.html$": "<rootDir>/test/utils/htmlLoader.js",
 *   },
 * -----
 * Last Modified: Thursday, 5th July 2018 11:50:35 pm
 * Modified By: joe (1120040377@qq.com>)
 * -----
 * Copyright 2018 - 2018 皮的不行
 */

const htmlLoader = require('html-loader')

module.exports = {
  process (src) {
    return htmlLoader(src)
  }
}
