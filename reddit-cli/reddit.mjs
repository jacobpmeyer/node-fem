#! /usr/bin/env node

// This is a CLI program to open reddit in Firefox.

// To install this cli:
// 1. cd to this directory
// 2. run `npm i -g`

// To use this CLI:
// From anywhere in the terminal, run `reddit`
// Alternatively `reddit --print` will print a title and permalink instead of opening browser

import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.argv)

const res = await fetch("https://www.reddit.com/.json")
const data = await res.json()
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://www.reddit.com${randomPost.data.permalink}`


if (argv.print || argv.p || argv.P) {
  console.log(`
    title: ${randomPost.data.title},
    link: ${link}
  `)
} else {
  open(link, {app: {name: 'firefox'}})
}
