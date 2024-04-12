import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "/src/pages/HomePage/HomePage.jsx";
import TestPage from "/src/pages/TestPage/TestPage.jsx";
import Imprint from "/src/pages/Imprint/ImprintPage.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="/test" element={<TestPage />} />
				<Route path="/impressum" element={Imprint} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
