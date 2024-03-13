import { useState } from "react";
import "./App.css";
import { LoadingApp } from "./components/LoadingApp";
import Home from "./components/Home";

function App() {
	const [isLogo, setIsLogo] = useState(true);

	setTimeout(() => {
		setIsLogo(false);
	}, 1500);

	if (isLogo) {
		return <LoadingApp />;
	} else {
		return <Home />;
	}
}

export default App;
