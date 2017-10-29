const SVGO = require('svgo')

const pluginsData = [
  'cleanupIDs',
  'cleanupListOfValues',
  'convertColors',
  'collapseGroups',
  'convertPathData',
  'mergePaths',
  'removeDimensions',
  'removeDesc',
  'removeDoctype',
  'removeComments',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'removeEmptyText',
  'removeHiddenElems',
  'removeMetadata',
  'removeUselessDefs',
  'removeUselessStrokeAndFill',
  'removeXMLProcInst',
  { removeTitle: { active: false } },
  { removeStyleElement: { active: true } },
  { removeXMLNS: { active: true } },
  { removeViewBox: { active: true } }
]

module.exports = new SVGO({
  full: true,
  plugins: pluginsData
})
