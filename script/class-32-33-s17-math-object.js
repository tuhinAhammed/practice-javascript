// // math object is a library function

// // var hoo = Math.floor(Math.random() * 3)
// // console.log(hoo);
// // class-33 -****** Guessing number Game


// var win = 0
// var lost =0 

// for(var i = 1 ; i <= 5 ; i++){
//     var userGuess = parseInt(prompt("Guess The Number with 1 - 5"))
//     var generateNumber = Math.floor(Math.random() * 5) + 1
//     if (userGuess == generateNumber){
//         console.log("You have Won");
//         win ++
//     }
//     else if(userGuess > 5 || userGuess <1 ){
//         console.log("Guess Within 1 - 5");
//         continue       
//     }
//     else{
//         console.log(`You Have Lost , Random Number was ${generateNumber}`);
//         lost ++
//     }
// }
// document.write ("You Have Win " + win + "</br>")
// document.write ("You Have Lost " + lost + "</br>")
