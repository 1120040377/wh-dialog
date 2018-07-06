import { bindProperty } from '@/instance/bindProperty'
import { addMethods } from '@/template'
import '@/style/jdialog.scss'

function jDialog (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof jDialog)
  ) {
    warn('jDialog is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

bindProperty(jDialog)
addMethods(jDialog)

export default jDialog
