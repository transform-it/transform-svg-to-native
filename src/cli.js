#!/usr/bin/env node

const meow = require('meow')
const colors = require('colors')
const globby = require('globby')
const fs = require('fs-extra')
const { camelCase } = require('lodash')
const getFileName = require('file-name')
const prettier = require('prettier')
const convertSvgString = require('./index')

const cli = meow(`
  ${colors.bold('Usage')}\n
    svg-to-native '**/*.svg' --out './svgs' --ext 'js'
`)

function getSvgContent (filePath, outDir, fileExtension, cb) {
  const fileName = camelCase(getFileName(filePath))

  const content = fs.readFileSync(filePath, {
    encoding: 'utf8'
  })

  convertSvgString(content, fileName, code => {
    fs.outputFile(
      `${outDir}/${fileName}.${fileExtension}`,
      prettier.format(code)
    )
  })
}

function convertSvgFiles (
  pattern = '*.svg',
  outDir = './out',
  fileExtension = 'jsx'
) {
  globby(pattern).then(paths => {
    paths.forEach(p => {
      getSvgContent(p, outDir, fileExtension)
    })
  })
}

if (!cli.input[0]) {
  throw new Error('You need to pass the glob pattern for files.')
}

convertSvgFiles(cli.input[0], cli.flags.out, cli.flags.ext)
