import { $, render } from '@/util'
import tpl from './toast.html'

function toast(content = '', options = {}) {
    $('body')[0].appendChild($(render(tpl, {
        className: 'class',
        status: 'success',
        content: 'toast'
    })))
}

export default toast;