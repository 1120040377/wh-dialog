<a name="actionSheet"></a>

## actionSheet(menus, actions, [options])
actionsheet 弹出式菜单

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| menus | <code>array</code> | 上层的选项 |
| actions | <code>array</code> | 下层的选项 |
| [options] | <code>object</code> | 配置项 |

**Example**  
```js
// APIjdialog.dialog(menus, actions [, options])jdialog.actionSheet([  {    label: '呼叫',    onClick: () => {      console.log('呼叫');    }  }], [  {    label: '取消',    onClick: () => {      console.log('取消');    }  }], {  title: '10086',  className: 'my-class',  onClose: () => {    console.log('关闭');  }});
```
