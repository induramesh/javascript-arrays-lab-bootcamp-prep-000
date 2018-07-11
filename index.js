var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}

function appendKitten(name) {
  return [...kittens,name]
}

function prependKitten(name) {
  return [name,...kittens]
}

function removeLastKitten() {
  kittens.pop(name)
}

function removeFirstKitten() {
  kittens.slice(1)
}
