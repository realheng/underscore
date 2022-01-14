import isArray from './isArray.js'
import _ from './underscore.js'

// Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.
export default function toPath(path) {
  return isArray(path) ? path : [path]
}
_.toPath = toPath
