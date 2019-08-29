/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isArray(array) {
  return Array.isArray(array)
}

export function isFormData(obj) {
  return Object.prototype.toString.call(obj) === '[object FormData]'
}

export function log(message, color, background) {
  console.log(`%c ${message}`, `background: ${background || 'black'}color: ${color || 'yellow'}`)
}
