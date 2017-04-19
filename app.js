var todos = [];

function render() {
	var listEle = document.getElementById("list");
	listEle.innerHTML = '';
	todos.forEach(function(todo) {
		var p = document.createElement("li");
		p.innerText = todo;
		listEle.appendChild(p);
	});
}

function addTodo() {
	var input = document.getElementById("new-todo");
	console.log("test")
	todos.push(input.value);
		render();
}

render();

