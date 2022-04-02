import styles from "./Header.module.css";

function Header() {
	return (
		<nav>
			<h1 className={styles.logo}>
				{/* <img src="/img/logo.png" alt="" /> */}
				<img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
			</h1>
			<ul className={styles.menu}>
				<li>
					<a href="">Drama</a>
				</li>
				<li>
					<a href="">Action</a>
				</li>
				<li>
					<a href="">Thriller</a>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
