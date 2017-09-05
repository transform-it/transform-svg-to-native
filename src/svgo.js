const SVGO = require('svgo')

const pluginsData = [
  'cleanupIDs',
  'cleanupListOfValues',
  'convertColors',
  'collapseGroups',
  'convertPathData',
  'convertShapeToPath',
  'mergePaths',
  'removeDimensions',
  'removeDesc',
  'removeDoctype',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'removeEmptyText',
  'removeHiddenElems',
  'removeMetadata',
  'removeTitle',
  'removeUselessDefs',
  'removeUselessStrokeAndFill',
  'removeXMLProcInst',
  { removeXMLNS: { active: true } }
]

module.exports = new SVGO({
  full: true,
  plugins: pluginsData
})
