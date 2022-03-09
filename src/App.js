import Button from "./Button";
import styles from './App.module.css';
import {useState, useEffect} from 'react'

function App() {
	const [counter, setCounter] = useState(0);
	const onClick = () => setCounter(prev => prev + 1)
	console.log('i run all the time')
	const iRunOnlyOne = () => {
		console.log('i run only once')
	}
	useEffect(iRunOnlyOne, [])
	return ( 
		<div>
			<h1 className={styles.title}>{counter}</h1>
			<Button text={'Continue'} />
			<button onClick={onClick}>click me</button>
		</div>
	);
}

export default App;