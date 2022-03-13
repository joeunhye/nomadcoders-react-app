import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
	const [todo, setToDo] = useState("");
	const [todos, setTodos] = useState([]);
	const onChange = e => setToDo(e.target.value);
	const onSubmit = e => {
		e.preventDefault();
		if (todo === "") {
			return;
		}
		setToDo("");
		setTodos(currentArr => [todo, ...currentArr]);
	};
	console.log(todos);
	return (
		<div>
			<h1>My To Dos ({todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={todo} onChange={onChange} placeholder="Write your to do..." />
				<button>Add To Do</button>
			</form>
		</div>
	);
}

export default App;
