// This import no longer works and will throw an error if it runs
// You can't import using common imports if you declare the file `.mjs`
// const { firstLog, secondLog } = require('./common_modules')

import { thirdLog } from './es6_modules.mjs'

// These don't work anymore because we've transformed this file into an es6 module
// firstLog()
// secondLog()

// Only mjs imports will work now
thirdLog()

// To run the file:
// `node app.js` in terminal

// Some internal modules that ship with node are:
// fs, path, child_process, and http
// They can be imported
