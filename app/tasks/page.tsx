"use client";
import { ChangeEvent, useState } from "react";
import Task from "../components/Task";

export default function Tasks() {
	const [name, setName] = useState("Bolt");
	const [tasks, setTasks] = useState([
		{ name: "do stuff", isDone: false },
		{ name: "do other stuff", isDone: false },
	]);
	const [inputTask, setInputTask] = useState("New Task");

	const doTask = (index: number) => {
		let temp = [...tasks];
		temp[index].isDone = true;
		setTasks(temp);
	};

	const updateInput = (task: ChangeEvent) => {
		setInputTask((task.target as HTMLInputElement).value);
	};

	const addTask = () => {
		let temp = [...tasks];
		temp.push({ name: inputTask, isDone: false });
		setInputTask("Another Task");
		setTasks(temp);
	};

	const clearTasks = () => {
		let temp = [] as { name: string; isDone: boolean }[];
		tasks.forEach((task) => {
			if (task.isDone) return;
			temp.push(task);
		});

		setTasks(temp);
	};

	return (
		<div>
			<h1>{`${name}'s Tasks:`}</h1>
			{/* <button
				className="bg-green-800 rounded-md p-1"
				onClick={() => setName("aaron")}
			>
				change name
			</button> */}
			<ul className="flex flex-col gap-2">
				{tasks.map((task, index) => {
					return (
						<li key={index}>
							<Task
								name={task.name}
								isDone={task.isDone}
								index={index}
								doTask={doTask}
							/>
						</li>
					);
				})}
			</ul>
			<div className="flex gap-3">
				<input
					className=" text-black p-2"
					type="text"
					value={inputTask}
					onChange={(e) => updateInput(e)}
				/>
				<button onClick={() => addTask()}> add</button>
			</div>
			<p>task to be added: {inputTask}</p>
			<button
				onClick={() => {
					clearTasks();
				}}
			>
				Clear done tasks
			</button>
		</div>
	);
}
