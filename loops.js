/* Count from 0 to 24 (25 times), and add a string to an array. If i = 1, then add "I'm one strange loop", everything else add "I'm counter strange loops", even 0 I guess... says everything else... */
function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 0){ array.push("I am 1 strange loop.")}
    else { array.push("I am ${i} strange loops")}
  }
  return array
}

/* Countdown from parameter passed and return done when , well... when is "done" ..., does not mutate passed parameter*/
function whileLoop(number){
  var countdown = number
  while(countdown > 0){
    console.log(--countdown)
  }
  return 'done'
}

function maybeTrue(){
  return Math.random() >= 0.5
}

/* Take an array as a argument  and remove elements until it is empty, or until function maybeTrue equals to false */
function doWhileLoop(array){
  do {
    array.pop()
  } while (array.lenght >0 && maybeTrue())
  return array
}
