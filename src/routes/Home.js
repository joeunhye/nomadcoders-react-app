import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import styles from "./Home.module.css";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
		// const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	// console.log(movies);
	return (
		<>
			{loading ? (
				<div className={styles.loading}>
					{/* <img src="/img/loading.svg" alt="" /> */}
					<img src={process.env.PUBLIC_URL + "/img/loading.svg"} alt="" />
				</div>
			) : (
				<>
					<Header />
					<div className={styles.wrap}>
						{movies.map(movie => (
							<Movie key={movie.id} id={movie.id} coverImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
						))}
					</div>
				</>
			)}
		</>
	);
}
export default Home;
