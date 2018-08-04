<a name="confirm"></a>

## confirm(content, yes, yes, no, no, options)
确认弹窗

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | 弹窗内容 |
| yes | <code>function</code> | 点击确定按钮的回调 |
| yes | <code>Object</code> | 配置项 |
| no | <code>function</code> | 点击取消按钮的回调 |
| no | <code>Object</code> | 配置项 |
| options | <code>Object</code> | 配置项 |

**Example**  
```js
// APIjdialog.confirm(content [, yes] [, no] [,options])jdialog.confirm('普通的confirm');jdialog.confirm('自定义标题的confirm', { title: '自定义标题' });jdialog.confirm('带回调的confirm', () => { console.log('yes') }, () => { console.log('no') });var $confirm = jdialog.confirm('手动关闭的confirm', () => {    return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭});$confirm.hiden()// 全部配置jdialog.confirm('内容', {  title: '标题',  icon: {    name: success, // 预置图标名称    color: 'blue', // 颜色 (blue、#ff0、rgba(100, 100, 100, .3)、...)    size: '10px', // 尺寸 (10px、1em、.1rem、...)  }  buttons: [{    label: '再想一想',    type: 'default',    onClick: () => { console.log('no') }  }, {    label: '好的',    type: 'primary',    onClick: () => { console.log('yes') }  }]});
```
