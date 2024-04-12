import { Link } from "react-router-dom";
function HomePage() {
	document.title = 'JW124 - Home'
	return (
		<>
			<Link to="/test">
				<button>To TestPage</button>
			</Link>
			<Link to="/impressum">
				<button>Impressum</button>
			</Link>
		</>
	);
}
export default HomePage;
