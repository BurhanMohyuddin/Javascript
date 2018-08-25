	//Exercise 7

var dataBase = [
	{
		username: "Burhan",
		password: "blahblah"
	},
	{
		username: "Zain",
		password: "blah"
	},
	{
		username: "Shumail",
		password: "123"
	}

];
var newsfeed = [
	{
		username: "Talha",
		timeline: "So tired of all that learning!"
	},

	{
		username:"Ahmad",
		timeline:"Javascript is sooo cool!"
	},
	{
		username:"Zain",
		timeline:"Aik vari fr sheer !"
	}
];

var userprompt = prompt("What's your username?");
var passprompt = prompt("what's your password?");

signIn(userprompt,passprompt);

function isValid(user, pass){
	for(var i = 0; i<dataBase.length;i++)
	{
		if(dataBase[i].username===user && dataBase[i].password===pass)
		{
			return true;
		}
	}
	return false;
}

function signIn(user , pass) {
	if(isValid(user,pass)) {
		console.log(newsfeed);
	}
	else {
		alert("Wrong username or password!!");
	}
}

