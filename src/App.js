import Button from "./Button";
import styles from './App.module.css';
import {useState, useEffect} from 'react'

function App() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState('')
	const onClick = () => setCounter(prev => prev + 1)
	const onChange = (e) => setKeyword(e.target.value);
	console.log('I run all the time')
	useEffect(() => {
		console.log('I run only once.')
	}, [])
	useEffect(() => {
		if(keyword !== '' && keyword.length > 5) {
			console.log('I run when "keyword" changes.', keyword)
		}
	}, [keyword])
	useEffect(() => {
		console.log('I run when "counter" changes.')
	}, [counter])
	useEffect(() => {
		console.log('I run when "keyword & counter" changes.')
	}, [keyword, counter])
	return ( 
		<div>
			<input type="text" placeholder="Search here..." value={keyword} onChange={onChange} />
			<h1 className={styles.title}>{counter}</h1>
			<Button text={'Continue'} />
			<button onClick={onClick}>click me</button>
		</div>
	);
}

export default App;