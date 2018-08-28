function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
<<<<<<< HEAD
  if (string.toUpperCase() === string) {
    string = "YES INDEED!"
  } else if (string.toLowerCase() === string) { 
    string = 'I can\'t hear you!'
  } else { 
    string = 'I love you, too.'
  }
=======
  if (uppercase.toUpperCase() === string) { string = "YES INDEED!" }
  if (lowercase.toLowerCase() === string) { string = 'I can\'t hear you!' }
  if (mixedCase.toLowerCase() === string && mixedCase.toUpperCase === string) { string = 'I love you, too.' }
>>>>>>> cd4dca081937622563a3c280f2b3dbd5c5aec9f7
  return string
}