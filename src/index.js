import bindAttribute from './instance/bindAttribute.js'

function jDialog (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof jDialog)
  ) {
    warn('jDialog is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

bindAttribute(jDialog)

export default jDialog
