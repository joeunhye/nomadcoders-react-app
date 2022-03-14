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
		setTodos(currentArr => [...currentArr, todo]);
	};
	const deleteBtn = e => {
		const idx = parseInt(e.target.className);
		setTodos(todos.filter((item, todoIndex) => idx !== todoIndex)); //arr.filter((처리할 현재 요소, 처리할 현재 요소의 인덱스)
	};
	console.log(todos);
	return (
		<div>
			<h1>My To Dos ({todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={todo} onChange={onChange} placeholder="Write your to do..." />
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{todos.map((item, index) => (
					<li key={index}>
						{item}
						<button className={index} onClick={deleteBtn}>
							✔
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
