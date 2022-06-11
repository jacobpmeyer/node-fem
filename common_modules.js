// Bundlers came along like webpack and allowed us to create modules out of our files

// Now we have two module types

// Common modules
function firstLog() {
  console.log("hello from first log function from the modules file")
}

function secondLog() {
  console.log("hello from second log function from the modules file")
}

module.exports = { firstLog, secondLog }
