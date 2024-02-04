import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "/src/pages/HomePage/HomePage.jsx";
import TestPage from "/src/pages/TestPage/TestPage.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="/test" element={<TestPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
