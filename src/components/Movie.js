import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImage, title, summary, genres }) {
	return (
		<div className={styles.movie}>
			<div className={styles.imaWrap}>
				<img src={coverImage} alt={title} />
			</div>
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p className={styles.summary}>{summary.length > 365 ? `${summary.slice(0, 365)}...` : summary}</p>
			<ul className={styles.genre}>
				{genres.map(g => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}
Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
