import { useCallback, useState } from "react";
import { LoadingApp } from "./LoadingApp";
import { Task } from "./Task";

export const TasksPage = () => {
	const [a, setA] = useState<number>(4);

	const setCount = useCallback(() => {
		setA(p => p - 1);
	}, []);

	return (
		<div className="tasks-block">
			<div style={{ display: "flex" }}>
				<div className="taskPage-logo">healty</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						top: 6,
						marginLeft: 4,
						width: 46,
					}}
				>
					<LoadingApp />
				</div>
			</div>

			{a > 0 ? (
				<div>{a} tasks left to do today</div>
			) : (
				<div>All tasks are done today 🥳</div>
			)}

			<Task name={"Brush your teeth in the morning"} setCount={setCount} />
			<Task name={"Do exercises"} setCount={setCount} />
			<Task name={"Eat fruit"} setCount={setCount} />
			<Task name={"Brush your teeth in the evening"} setCount={setCount} />
		</div>
	);
};
