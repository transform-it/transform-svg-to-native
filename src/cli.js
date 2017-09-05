#!/usr/bin/env node

const meow = require('meow')
const colors = require('colors')
const { convertSvgFiles } = require('./index')

const cli = meow(`
  ${colors.bold('Usage')}\n
    svg-to-native '**/*.svg' --out './svgs' --ext 'js'
`)

if (!cli.input[0]) {
  throw new Error('You need to pass the glob pattern for files.')
}

convertSvgFiles(cli.input[0], cli.flags.out, cli.flags.ext)
