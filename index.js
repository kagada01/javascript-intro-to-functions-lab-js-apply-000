function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
console.log(string.toUpperCase());
}

function logWhisper(string) {
console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = "I can't hear you!"
  var uppercase = "YES INDEED!"
  if (string === string.toLowerCase())
  return lowercase
  if (string === string.toUpperCase())
  return uppercase
}