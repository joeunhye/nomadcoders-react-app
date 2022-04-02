import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const getMovie = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		setMovie(json.data.movie);
		console.log(json.data.movie);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div
			className={styles.detailBox}
			style={{
				background: `url(${movie.background_image}) no-repeat`,
			}}
		>
			<div className={styles.cover}></div>
			<div className={styles.detailCont}>
				<h3 className={styles.movieTitle}>{movie.title_long}</h3>
				<div className={styles.description}>
					<img src={movie.medium_cover_image} alt="" />
					<div>
						<span>
							{movie.year} | {movie.rating} | {movie.language}
						</span>
						<strong>{movie.genres}</strong>
						<p>{movie.description_full}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;
