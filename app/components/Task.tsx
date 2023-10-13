import { useState } from "react";
export default function Task(props: {
	name: string;
	isDone: boolean;
	index: number;
	doTask: (index: number) => void;
}) {
	const [important, setImportant] = useState(false);

	const markImportant = () => {
		setImportant(!important);
	};

	return (
		<div className="flex flex-col gap-2 border-2 p-2 w-1/2 rounded-md border-white">
			<p>
				<span className={`${important ? " text-2xl text-red-600" : ""}`}>
					{props.name}
				</span>
				<span>{props.isDone ? "✅" : "❌"}</span>
			</p>
			{props.isDone ? null : (
				<div>
					<button
						className="bg-green-800 rounded-md p-1"
						onClick={() => props.doTask(props.index)}
					>
						Mark done
					</button>
					<button onClick={markImportant}>Important!</button>
				</div>
			)}
		</div>
	);
}
