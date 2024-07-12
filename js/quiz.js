/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
correct = 0;



// 2. Store the rank of a player
rank = 'Not known'

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt('name the programming language that you are learning?')
if(answer1.toUpperCase() == 'JAVASCRIPT'){
  correct += 1
}

answer2 = prompt('what is the programming language for web content?')
if(answer2.toUpperCase() == 'HTML'){
  correct += 1
}

answer3 = prompt('what language we use for styling web?')
if(answer3.toUpperCase() == 'CSS'){
  correct += 1
}

answer4 = prompt('what is the name of the college you study in?')
if(answer4.toUpperCase() == 'DOUGLAS'){
  correct += 1
}

answer5 = prompt('what is the name of the city where your college is?')
if(answer5.toUpperCase() == 'NEW WEST'){
  correct += 1
  // console.log(answer5.toUpperCase());
  // console.log(answer5.toLowerCase())
}



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct >= 5 ){
  rank = 'Gold'
} else if (correct >= 3){
  rank = 'Silver'
} else if (correct >=1){
  rank = 'Bronze'
} else {
  rank = 'no crown'
}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `<h1>Your score is ${correct} out of 5 <br> Your rank  is ${rank}</h1>`

