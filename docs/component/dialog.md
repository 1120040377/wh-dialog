<a name="dialog"></a>

## dialog(options)
dialog，弹窗，alert和confirm的父类

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | 配置项 |

**Example**  
```js
// APIjdialog.dialog(options)jdialog.dialog({  title: '标题',  content: '内容',  className: 'my-class',  buttons: [{    label: '取消',    type: 'default',    onClick: function () { alert('取消') }  }, {    label: '确定',    type: 'primary',    color: '#f66',    onClick: function () { alert('确定') }  }],  icon: {    name: success, // 预置图标名称    color: 'blue', // 颜色 (blue、#ff0、rgba(100, 100, 100, .3)、...)    size: '10px', // 尺寸 (10px、1em、.1rem、...)  }});// 主动关闭var $dialog = jdialog.dialog({...});$dialog.hide(() => {  console.log('弹窗已关闭');});
```
