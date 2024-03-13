import { useRef, useState } from "react";
import { WelcomeTour } from "./WelcomeTour";
import { TasksPage } from './TasksPage'

function Home() {
	const [, setIsWelcomeTour] = useState(false);
	const isWelcomeRef = useRef(false);

	const LsIsWelcomeTour = localStorage.getItem("isWelcomeTour");

	if (LsIsWelcomeTour) {
		isWelcomeRef.current = true;
	}

	// function handlerClickClear() {
	// 	localStorage.clear();
	// }

	if (!isWelcomeRef.current) {
		return <WelcomeTour setIsWelcomeTour={setIsWelcomeTour}></WelcomeTour>;
	}

	return (
		<>
			<TasksPage/>
			{/* <button onClick={handlerClickClear}>clear</button> */}
		</>
	);
}

export default Home;
