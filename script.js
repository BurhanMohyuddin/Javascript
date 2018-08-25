//				Practice!!!!
// 4*5;
// if(4*5 === 20) {
// 	console.log ("Hello Devs");
// }

// console.log ("Helloooo");
// function sayHello() {
// 	console.log ("Helloooo");
// }
// sayHello();

// var a = function() {
// 	console.log("Byeee");
// }

// a();
// console.log("<------------------------>");
// function sing (song) {
// 	console.log (song);
// }

// sing("Hello");
// sing ("you so fkin precious when you smile");
// sing ("Baby i don'tunderstand this, you changing i can stand this");

// console.log("<------------------------>");

// function multiply(a,b){
// 	if (a > 10 || b > 10) {
// 		return "Nice Dude";
// 	} else {
// 		return a*b;
// 	}
// }
// multiply();
// console.log("<------------------------>");


alert("Solution Of Exercise 5");

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//Part 1's Answer :

function checkDriverAge() {
	var age = prompt("What is your age ? ");

	if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
checkDriverAge();
//Part 2's Answer : 

var checkDriverAge2 = function () {
	var age = prompt("What is your age ? ");

	if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
checkDriverAge2();
//Part 3's Answer : 
 function checkDriverAge(age) {
 	if (Number(age) < 18) {
	return "Sorry, you are too yound to drive this car. Powering off";
} else if (Number(age) > 18) {
	return "Powering On. Enjoy the ride!";
} else if (Number(age) === 18) {
	return "Congratulations on your first year of driving. Enjoy the ride!";
}
 }
 checkDriverAge();