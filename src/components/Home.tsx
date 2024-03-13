import { useRef, useState } from "react";
import { WelcomeTour } from "./WelcomeTour";

function Home() {
	const [, setIsWelcomeTour] = useState(false);
	const isWelcomeRef = useRef(false);

	const LsIsWelcomeTour = localStorage.getItem("isWelcomeTour");

	if (LsIsWelcomeTour) {
		isWelcomeRef.current = true;
	}

	function handlerClickClear() {
		localStorage.clear();
	}

	if (!isWelcomeRef.current) {
		return <WelcomeTour setIsWelcomeTour={setIsWelcomeTour}></WelcomeTour>;
	}

	return (
		<div>
			main
			<button onClick={handlerClickClear}>clear</button>
		</div>
	);
}

export default Home;
