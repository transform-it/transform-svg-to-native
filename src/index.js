const svgo = require('./svgo')
const {
  capitalize,
  isEmpty,
  isArray,
  isString,
  isFunction,
  findIndex
} = require('lodash')
const { transform } = require('babel-core')
const isCapitalized = require('is-capitalized')
const HTMLtoJSX = require('@tsuyoshiwada/htmltojsx')

const converter = new HTMLtoJSX({
  createClass: false
})

const supportedElements = [
  'Svg',
  'Circle',
  'Ellipse',
  'G',
  'LinearGradient',
  'RadialGradient',
  'Line',
  'Path',
  'Polygon',
  'Polyline',
  'Rect',
  'Symbol',
  'Text',
  'Use',
  'Defs',
  'Stop'
]

const importMapping = {}

function smartArrayPush (id, value) {
  const property = importMapping[id]
  if (!property || (!isEmpty(property) && !isArray(property))) {
    importMapping[id] = [value]
  } else if (importMapping[id].indexOf(value) === -1) {
    importMapping[id].push(value)
  }
}

function plugin ({ types: t }) {
  return {
    visitor: {
      JSXIdentifier (path, state) {
        if (
          t.isJSXOpeningElement(path.parent) &&
          (path.node.name === 'script' || path.node.name === 'div')
        ) {
          path.parentPath.parentPath.remove()
          return
        }

        if (
          (t.isJSXOpeningElement(path.parent) ||
            t.isJSXClosingElement(path.parent)) &&
          !isCapitalized(path.node.name)
        ) {
          const index = findIndex(
            supportedElements,
            o => o.toLowerCase() === path.node.name.toLowerCase()
          )

          if (supportedElements[index] !== 'Svg') {
            smartArrayPush(state.opts.id, supportedElements[index])
          }

          path.replaceWith(t.JSXIdentifier(supportedElements[index]))
        }
      }
    }
  }
}

function template (id, code) {
  return `
import Svg, {${importMapping[id].join(', ')}} from 'react-native-svg'

export default function () {
  return ${code}
}
`
}

function convertSvgString (svg, fileName, cb) {
  fileName = isString(arguments[1]) ? arguments[1] : '_id'
  cb = isFunction(arguments[2]) ? arguments[2] : arguments[1]

  if (!cb) {
    throw new Error('You need to pass a callback function.')
  }

  svgo.optimize(svg, result => {
    const jsx = converter.convert(result.data)
    const { code } = transform(jsx, {
      plugins: [
        'syntax-jsx',
        [
          plugin,
          {
            id: fileName
          }
        ]
      ]
    })

    cb(template(fileName, code))
  })
}

module.exports = convertSvgString
