let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask() {
	if (input.value === "") {
		alert("Please enter a task");
	} else {
		let li = document.createElement("li");
		let text = document.createTextNode(input.value);
		li.appendChild(text);
		let deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "Delete";
		deleteBtn.classList.add("delete-btn");
		deleteBtn.addEventListener("click", function() {
			li.remove();
		});
		li.appendChild(deleteBtn);
		list.appendChild(li);
		input.value = "";
	}
}
