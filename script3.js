var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study java",
	"eat healthy"
];

var todosImp = [
	"clean room!!",
	"brush teeth!!",
	"exercise!!",
	"study java!!",
	"eat healthy!!"
];

var length = todos.length;
for(var i = 0; i<length; i++){
	console.log(todos[i]);	
}


var count = 10;
while(count>0) {
	console.log(count);
	count--;
}



var count2 = 10;
do {
	console.log(count2);
	count2--;
}while(count2>10)


todos.foreach(function(todo)){
	count.log(todo);
}
//to get index
todos.foreach(function(todo)){
	count.log(todo , i);
}

function logTodos(todo , i) {
	console.log(todo , i);
}

todos.foreach(logTodos);
todosImp.foreach(logTodos);