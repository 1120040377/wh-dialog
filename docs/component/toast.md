<a name="toast"></a>

## toast(content, content, options, options, options)
toast 一般用于用户操作成功或失败时的提示

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | 提示信息 |
| content | <code>Object</code> | 配置项 |
| options | <code>Object</code> | 配置项 |
| options | <code>Number</code> | 显示时长 |
| options | <code>function</code> | 回调函数 |

**Example**  
```js
// API
jdialog.toast(content [, options])

// 普通的toast
jdialog.toast('成功')

// 5秒后消失的toast
jdialog.toast('成功', 5000)

// 带回调toast
jdialog.toast('成功', () => {
  alert('toast消失)
})

// 带icon的toast
jdialog.toast({
  className: 'my-class', // 自定义类名
  content: '成功', // 提示信息
  duration: 1000, // 显示时长
  icon: {
    name: 'success', // 预置图标名称
    color: 'blue', // 颜色 (blue、#ff0、rgba(100, 100, 100, .3)、...)
    size: '10px', // 尺寸 (10px、1em、.1rem、...)
  }
})

// 带icon的toast
jdialog.toast({
  className: 'my-class', // 自定义类名
  content: '成功', // 提示信息
  duration: 1000, // 显示时长
  icon: 'success', // 如果icon为字符串，则取默认图标，值允许为 success / fail / wait
})
```
